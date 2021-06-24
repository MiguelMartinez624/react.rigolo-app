import React from "react";
import {Icon} from "../atoms/Icon";
import {DynamicForm} from "../molecules/DynamicForm";
import {Button} from "../atoms/Button";
import {InputProps} from "../atoms/Forms/Input";
import {NewClient} from "../../Features/Clients/context/models";
import {Validators} from "../atoms/Forms/validators";


const newClientFields: { objKey: string, config: InputProps }[] = [
    {
        objKey: 'name', config: {placeholder: 'Nombre', validator: Validators.Required}
    },
    {objKey: 'phone', config: {placeholder: 'Telefono', validator: Validators.Required}},
    {objKey: 'region', config: {placeholder: 'Region'}},
    {objKey: 'email', config: {placeholder: 'Email', validator: Validators.Required}},
]

export interface NewClientFormProps {
    submitHandler: (newClientData: NewClient) => void
}

export const NewClientForm: React.FC<NewClientFormProps> = ({submitHandler}) => {
    return (<div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'
    }}>
        <Icon name={'brand'}/>
        <div style={{height: 30}}></div>
        <DynamicForm
            fields={newClientFields}
            actionsTemplate={(values: any) => {
                return (
                    <Button onClick={
                        () => {
                            submitHandler(values as NewClient);
                        }
                    } label={'Enviar'}/>
                )
            }}
        />

    </div>)
}
