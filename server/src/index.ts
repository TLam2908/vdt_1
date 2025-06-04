import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware";

import RegistrationRoutes from "./routes/registration.routes";

const PORT = process.env.PORT || 8001;
const APP_ORIGIN = process.env.APP_ORIGIN || "http://localhost:3001";

const registrationRoutes = new RegistrationRoutes();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/registrations", registrationRoutes.router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
