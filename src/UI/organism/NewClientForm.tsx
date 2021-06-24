import React from "react";
import {Icon} from "../atoms/Icon";
import {DynamicForm} from "../molecules/DynamicForm";
import {Button} from "../atoms/Button";
import {InputProps} from "../atoms/Input";
import {NewClient} from "../../Features/Clients/context/models";


const newClientFields: { objKey: string, config: InputProps }[] = [
    {objKey: 'name', config: {placeholder: 'Nombre'}},
    {objKey: 'phone', config: {placeholder: 'Telefono'}},
    {objKey: 'region', config: {placeholder: 'Region'}},
    {objKey: 'email', config: {placeholder: 'Email'}},
]

export interface NewClientFormProps {
    submitHandler: (newClientData: NewClient) => void
}

export const NewClientForm: React.FC<NewClientFormProps> = ({submitHandler}) => {
    return (<div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'
    }}>
        <Icon name={'brand'}/>
        <div style={{height:30}}></div>
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
