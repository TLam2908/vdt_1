import { HttpStatusCode } from "../constants/http";

class AppError extends Error {
    constructor(
        public statusCode: HttpStatusCode,
        public message: string,
    ) {
        super(message)
        // message is inherited from Error, but we want to ensure that the name is set correctly
    }
}

export default AppError;