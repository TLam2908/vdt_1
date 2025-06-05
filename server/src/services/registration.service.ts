import { PrismaClient, Registration } from "@prisma/client";
import { RegistrationType } from "../schema/registration.schema.";
import AppError from "../utils/appError";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} from "../constants/http";
import { sendMail } from "../utils/sendEmail";
import React from "react";
import RegistrationEmail from "../emails/registration";

class RegistrationService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createRegistration(
    registrationData: RegistrationType
  ): Promise<Registration> {
    // Tạo registration trước
    const createdRegistration = await this.prisma.registration.create({
      data: registrationData,
    });

    try {
      const emailResponse = await sendMail({
        to: registrationData.email,
        subject: "Registration Successful",
        text: `Thank you for registering with us! Your registration ID is ${createdRegistration.id}.`,
        react: React.createElement(RegistrationEmail, {
          props: createdRegistration,
        }),
      });

      console.log("Email sent successfully:", emailResponse);
      return createdRegistration;
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return createdRegistration;
    }
  }

  public async getRegistrations(): Promise<Registration[]> {
    const registrations = await this.prisma.registration.findMany();
    if (!registrations || registrations.length === 0) {
      throw new AppError(NOT_FOUND, `No registrations found`);
    }
    return registrations;
  }

  public async getRegistrationById(id: number): Promise<Registration | null> {
    const registration = await this.prisma.registration.findUnique({
      where: { id },
    });
    if (!registration) {
      throw new AppError(NOT_FOUND, `Registration with ${id} not found`);
    }
    return registration;
  }

  public async deleteRegistration(id: number): Promise<Registration> {
    const deletedRegistration = await this.prisma.registration.delete({
      where: { id },
    });
    if (!deletedRegistration) {
      throw new AppError(NOT_FOUND, `Registration with ${id} not found`);
    }
    return deletedRegistration;
  }

  public async updateRegistration(
    id: number,
    registrationData: RegistrationType
  ): Promise<Registration> {
    const updatedRegistration = await this.prisma.registration.update({
      where: { id },
      data: registrationData,
    });
    if (!updatedRegistration) {
      throw new AppError(NOT_FOUND, `Registration with ${id} not found`);
    }
    return updatedRegistration;
  }
}

export default RegistrationService;
