import {FieldValidatorFunc} from "./Input";

export const Validators: any = {
    Required: (value: string, msg: string): { valid: boolean, message: string } => {
        if (value.trim() === "") {
            return {message: "Campo requerido", valid: false}
        }
        return {message: "", valid: true}
    }

}
