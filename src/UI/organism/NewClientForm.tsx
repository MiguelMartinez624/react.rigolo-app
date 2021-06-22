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
    {objKey: 'Email', config: {placeholder: 'Email'}},
]

export interface NewClientFormProps {
    submitHandler: (newClientData: NewClient) => void
}

export const NewClientForm: React.FC<NewClientFormProps> = ({submitHandler}) => {
    return (<div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', height: '100%'
    }}>
        <Icon name={'brand'}/>
        <DynamicForm
            fields={newClientFields}
            actionsTemplate={(values: any) => (
                <Button
                    style={{position: 'absolute', bottom: 30}}
                    onClick={
                        () => {
                            submitHandler(values as NewClient);
                        }
                    } label={'Enviar'}/>
            )}
        />

    </div>)
}
