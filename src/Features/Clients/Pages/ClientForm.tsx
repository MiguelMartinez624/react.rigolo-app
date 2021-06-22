import React from "react";

import {ClientsContext} from "../context/ClientContext";
import {Icon} from "../../../UI/atoms/Icon";
import {Card} from "../../../UI/atoms/Card";
import {useWindowSize} from "../../../hooks/window-size.hookt";
import {ResponsiveBox} from "../../../UI/atoms/ResponsiveBox";
import {NewClientForm} from "../../../UI/organism/NewClientForm";
import {Text} from "../../../UI/atoms/Text";
import {ContactInfo} from "../../../UI/molecules/ContactInfo";


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
            sizes={{desktopSize: 600}}
            mobile={
                <Card style={{width: '90%', height: '90%'}}>
                    <NewClientForm  submitHandler={submitHandler}/>
                    {/*<ContactInfo/>*/}
                </Card>

            }
            desktop={
                <Card style={{width: '30%', height: '50%'}}>
                    <NewClientForm submitHandler={submitHandler}/>
                </Card>
            }

        />
    )
}
