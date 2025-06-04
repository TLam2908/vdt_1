import { Router } from "express";
import RegistrationController from "../controllers/registration.controller";

class RegistrationRoutes {
  public router = Router();
  private registrationController: RegistrationController;

  constructor() {
    this.registrationController = new RegistrationController();
    this.initRoute();
  }

  public initRoute() {
    // Thay đổi từ "/registrations" thành "/"
    this.router.post("/", this.registrationController.createRegistration);
    this.router.get("/", this.registrationController.getRegistrations);
    this.router.get("/:id", this.registrationController.getRegistrationById);
    this.router.delete("/:id", this.registrationController.deleteRegistration);
    this.router.put("/:id", this.registrationController.updateRegistration);
  }
}

export default RegistrationRoutes;