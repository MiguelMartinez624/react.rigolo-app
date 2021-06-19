import React, {useState} from "react";
import {Input, InputProps} from "../atoms/Input";


type RenderInputFunc = (config: { objKey: string, config: InputProps }) => React.ReactNode;
type FieldValidatorFunc = (value: string) => { valid: boolean, message?: string };
export interface DynamicFormProps {
    fields: { objKey: string, config: InputProps, validators?: FieldValidatorFunc[] }[]
    initialValue?: any
}

export const DynamicForm: React.FC<DynamicFormProps> = ({fields, initialValue}) => {

    const [value, setValue] = useState<any>(initialValue || {});


    const renderField: RenderInputFunc = ({objKey, config}) => {
        return (
            <Input
                key={objKey}
                onValueChange={(newValue) => {
                    value[objKey] = newValue
                    setValue({...value});
                }}
                placeholder={config.placeholder}
            />
        )
    }

    return (
        <>
            {fields.map(renderField)}
        </>
    )

}
