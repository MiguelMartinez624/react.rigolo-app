import React, {useEffect} from "react";
import {Text} from "../Text";
import {floatingLabel, inputContainerStyle, inputStyle, labelStyle} from "./input.style";

export type FieldValidatorFunc = (value: string, type: string) => { valid: boolean, message: string };

export type InputType = 'text';

export interface InputProps {
    type?: InputType;
    placeholder?: string;
    initialValue?: any;
    onValueChange?: (value: any) => void
    hint?: string,
    validator?: FieldValidatorFunc
}

export const Input: React.FC<InputProps> =
    ({
         initialValue,
         type = 'text',
         placeholder,
         onValueChange,
         hint,
         validator
     }) => {
        const [value, setValue] = React.useState<any>(initialValue || "");
        const [hasFocus, setFocus] = React.useState(false);
        const [hasError, setHasError] = React.useState(false);
        const [errMsg, setErrorMsg] = React.useState("");
        const inputRef = React.useRef<HTMLInputElement>(null);

        const handleInputChange = (ev: any) => {
            setValue(ev.target.value);
            if (validator) {
                const {valid, message} = validator(ev.target.value, type)
                console.log(valid)
                setHasError(true);
                setErrorMsg(message)
            }
            if (onValueChange) {
                onValueChange(ev.target.value);
            }
        }

        useEffect(() => {
            if (document.hasFocus() && inputRef?.current?.contains(document.activeElement)) {
                setFocus(true);
            }
        }, []);

        return (
            <div style={{width: '100%', marginBottom: 5, height: 58}}>
                <div style={inputContainerStyle}>
                    <input ref={inputRef}
                           onFocus={() => setFocus(true)}
                           onBlur={() => setFocus(false)}
                           style={inputStyle}
                           onChange={handleInputChange}
                           value={value}
                           type={type}/>
                    <label style={(!(value)) && !hasFocus ? labelStyle : floatingLabel}>{placeholder}</label>
                </div>
                {hasError ? <Text variant={"hint"}>{errMsg || ""}</Text> : null}
            </div>
        )

    }
