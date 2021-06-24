import React, {useState} from "react";
import {Input, InputProps} from "../atoms/Forms/Input";


type RenderInputFunc = (config: { objKey: string, config: InputProps }) => React.ReactNode;

export interface DynamicFormProps {
    fields: { objKey: string, config: InputProps}[]
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
                {...config}

            />
        )
    }

    return (
        <>
            {fields.map(renderField)}
            <div style={{width:'100%', marginTop: '26vh'}}>
                {actionsTemplate ? actionsTemplate(value) : null}
            </div>
        </>
    )

}
