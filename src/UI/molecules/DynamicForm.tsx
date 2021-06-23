import React, {useState} from "react";
import {Input, InputProps} from "../atoms/Input";


type RenderInputFunc = (config: { objKey: string, config: InputProps }) => React.ReactNode;
type FieldValidatorFunc = (value: string) => { valid: boolean, message?: string };

export interface DynamicFormProps {
    fields: { objKey: string, config: InputProps, validators?: FieldValidatorFunc[] }[]
    initialValue?: any
    actionsTemplate?: (values: any) => React.ReactNode
}

export const DynamicForm: React.FC<DynamicFormProps> = (
    {
        fields,
        initialValue,
        actionsTemplate
    }) => {

    const [value, setValue] = useState<any>(initialValue || {});


    const renderField: RenderInputFunc = ({objKey, config}) => {
        return (
            <Input
                key={objKey}
                onValueChange={(newValue) => {
                    value[objKey] = newValue
                    console.log(newValue)
                    setValue({...value});
                }}
                placeholder={config.placeholder}
            />
        )
    }

    return (
        <>
            {fields.map(renderField)}
            <div style={{width:'100%'}}>
                {actionsTemplate ? actionsTemplate(value) : null}
            </div>
        </>
    )

}
