import React from "react";
import {ClientsContextProvider} from "./context/ClientContext";
import {ClientFormPage} from "./Pages/ClientForm";

export interface ClientProps {
}

export const Clients: React.FC<ClientProps> = () => {
    return (
        <ClientsContextProvider>
            <ClientFormPage></ClientFormPage>
        </ClientsContextProvider>
    )
}
