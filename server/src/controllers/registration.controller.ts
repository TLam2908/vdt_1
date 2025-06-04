import { OK } from "../constants/http";
import { Request, Response } from "express";
import RegistrationService from "../services/registration.service";
import catchErrors from "../utils/catchError";
import { RegistrationSchema } from "../schema/registration.schema.";

class RegistrationController {
  private registrationService = new RegistrationService();

  public createRegistration = catchErrors(
    async (req: Request, res: Response) => {
      const registrationData = RegistrationSchema.parse(req.body);
      const createdRegistration =
        await this.registrationService.createRegistration(registrationData);
      return res.status(OK).json({
        message: "Registration created successfully",
        data: createdRegistration,
      });
    }
  );

  public getRegistrations = catchErrors(async (req: Request, res: Response) => {
    const registrations = await this.registrationService.getRegistrations();
    return res.status(OK).json({
      message: "Registrations retrieved successfully",
      data: registrations,
    });
  });

  public getRegistrationById = catchErrors(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const registration = await this.registrationService.getRegistrationById(
        Number(id)
      );
      return res.status(OK).json({
        message: "Registration retrieved successfully",
        data: registration,
      });
    }
  );

  public deleteRegistration = catchErrors(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const deletedRegistration =
        await this.registrationService.deleteRegistration(Number(id));
      return res.status(OK).json({
        message: "Registration deleted successfully",
        data: deletedRegistration,
      });
    }
  );

  public updateRegistration = catchErrors(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const registrationData = RegistrationSchema.parse(req.body);
      const updatedRegistration =
        await this.registrationService.updateRegistration(
          Number(id),
          registrationData
        );
      return res.status(OK).json({
        message: "Registration updated successfully",
        data: updatedRegistration,
      });
    }
  );
}

export default RegistrationController;
