import React from "react";

import {ClientsContext} from "../context/ClientContext";
import {Card} from "../../../UI/atoms/Card";
import {ResponsiveBox} from "../../../UI/atoms/ResponsiveBox";
import {NewClientForm} from "../../../UI/organism/NewClientForm";
import {NewClient} from "../context/models";
import {Text} from "../../../UI/atoms/Text";
import {Button} from "../../../UI/atoms/Button";
import {APIError} from "../../../Common/types";

const MESSAGES: { [p: string]: string } = {
    'name': 'El nombre es requerido para el registro',
    'email': 'El email es requerido para el registro',
    'phone': 'El numero de telefono  es requerido para el registro'
}
export const ErrorMessagePage: React.FC<{ err: APIError, onGoBack: () => void }> = ({err, onGoBack}) => {
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%'
        }}>
            <Text variant={"title"}> {MESSAGES[err?.data?.field] || "UN error inexperado ocurrio!"}</Text>
            <Button onClick={onGoBack} style={{marginTop: 40}} label={"Volver"}/>
        </div>
    )
}

export const SuccessMessagePage: React.FC<{ onGoBack: () => void }> = ({onGoBack}) => {
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%'
        }}>
            <Text variant={"title"}>Gracias!!! </Text>
            <Button onClick={onGoBack} style={{marginTop: 40}} label={"Volver"}/>
        </div>
    )
}


export interface ClientFormPageProps {
}

export const ClientFormPage: React.FC<ClientFormPageProps> = () => {
    const {submitNewClient} = React.useContext(ClientsContext);
    const [err, setError] = React.useState<APIError | null>(null)
    const [isSuccess, setSuccess] = React.useState<boolean>(false)

    const submitHandler = (data: NewClient) => {
        submitNewClient(data)
            .then(({error, data}) => {
                if (error) {
                    setError(error)
                    return;
                }
                setSuccess(true)

            })
            .catch(console.warn)
    }
    return (
        <ResponsiveBox
            sizes={{desktopSize: 600}}
            mobile={
                <Card style={{width: '90%', height: '90%'}}>
                    {!err && !isSuccess && <NewClientForm submitHandler={submitHandler}/>}
                    {err && <ErrorMessagePage err={err} onGoBack={() => {
                        setError(null);
                    }}/>}
                    {isSuccess && <SuccessMessagePage onGoBack={() => {
                        setSuccess(false);
                    }}/>}
                </Card>

            }
            desktop={
                <Card style={{width: '30%', height: '50%'}}>
                    <Text variant={"title"}> Esta no es una app para ordenador!!</Text>
                    <NewClientForm submitHandler={submitHandler}/>
                </Card>
            }

        />
    )
}
