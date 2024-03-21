import { IValidationService } from "../../interfaces/IValidation";
import { ValidationError } from "../../utils/handler/Error";

export class ValidationService implements IValidationService {

    isEmail(email: string): void {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(email)){
            throw new ValidationError("Invalid email");
        }
    }

    isPassword(password: string): void {
        const passwordRegex =/^.{8}$/;

        if(!passwordRegex.test(password)){
            throw new ValidationError("Invalid password");
        }
    }

    isRole(role: string): void {
        const roleRegex = /^(owner|customer)$/;
        if(!roleRegex.test(role)){
            throw new ValidationError("Invalid role");
        }
    }

    isPhoneNumber(number: string): void {
        const numberRegex = /^\d{10}$/;
        if(!numberRegex.test(number)){
            throw new ValidationError("Invalid phone number");
        }
    }

}