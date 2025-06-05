import apiClient from "./apiClient";
import type { RegistrationFormData } from "../validation/registration";

export const createRegistration = async (data: RegistrationFormData) => {
  try {
    const response = await apiClient.post("/registrations", data);
    return response.data;
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
};
