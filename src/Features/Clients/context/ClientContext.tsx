import {NewClient} from "./models";
import {Result} from "../../../Common/types";
import React from "react";

export interface ClientContextActions {
    submitNewClient: (newClient: NewClient) => Promise<Result<string>>;
}

export interface ClientContextData {
}

export interface ClientsContextState extends ClientContextActions {
}

export const initialClientsState: ClientsContextState = {
    submitNewClient: (newClient) => {
        throw new Error("metodo sin implmentar")
    },
};

export const ClientsContext = React.createContext<ClientsContextState>(initialClientsState);

export interface ClientContextProviderProps {
    children?: React.ReactNode,
    initialState?: ClientsContextState
}

export const ClientsContextProvider: React.FC<ClientContextProviderProps> =
    ({
         children,
         initialState = initialClientsState
     }) => {

        return (
            <ClientsContext.Provider
                value={initialState}
            >
                {children}
            </ClientsContext.Provider>
        );
    };
