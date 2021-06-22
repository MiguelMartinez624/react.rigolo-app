import React from "react";
import {ClientsContextProvider} from "./context/ClientContext";
import {ClientFormPage} from "./Pages/ClientForm";
import {createClient} from "../../API/clients.http";

export interface ClientProps {
}

export const Clients: React.FC<ClientProps> = () => {
    return (
        <ClientsContextProvider initialState={
            {submitNewClient: createClient}
        }>
            <ClientFormPage></ClientFormPage>
        </ClientsContextProvider>
    )
}
