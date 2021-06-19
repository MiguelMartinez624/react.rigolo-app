import React from "react";

import {ClientsContext} from "../context/ClientContext";
import {InputProps} from "../../../UI/atoms/Input";
import {DynamicForm} from "../../../UI/molecules/DynamicForm";
import {Button} from "../../../UI/atoms/Button";
import {Icon} from "../../../UI/atoms/Icon";
import {Card} from "../../../UI/atoms/Card";
import {useWindowSize} from "../../../hooks/window-size.hookt";
import {ResponsiveBox} from "../../../UI/atoms/ResponsiveBox";


const newClientFields: { objKey: string, config: InputProps }[] = [
    {objKey: 'name', config: {placeholder: 'Nombre'}},
    {objKey: 'phone', config: {placeholder: 'Telefono'}},
    {objKey: 'region', config: {placeholder: 'Region'}},
    {objKey: 'Email', config: {placeholder: 'Email'}},
]

export interface ClientFormPageProps {
}

export const ClientFormPage: React.FC<ClientFormPageProps> = () => {
    const {submitNewClient} = React.useContext(ClientsContext);
    const {width} = useWindowSize();

    const submitHandler = () => {
        submitNewClient({name: "hola", phone: "lol", region: ";olaosd"})
            .then(console.log)
            .catch(console.warn)
    }
    return (
        <ResponsiveBox
            sizes={{desktopSize: 600, mobileSize: 300}}
            mobile={
                <Card style={{width: '90%', height: '90%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                        position: 'relative',height:'100%'}}>
                        <Icon/>
                        <DynamicForm fields={newClientFields}/>
                        <Button style={{position: 'absolute', bottom: 30}} onClick={submitHandler} label={'Enviar'}/>
                    </div>
                </Card>

            }
            desktop={
                <Card style={{width: '30%', height: '50%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                        position: 'relative',height:'100%'}}>
                        <Icon/>
                        <DynamicForm fields={newClientFields}/>
                        <Button style={{position: 'absolute', bottom: 30}} onClick={submitHandler} label={'Enviar'}/>
                    </div>
                </Card>
            }

        />
    )
}
