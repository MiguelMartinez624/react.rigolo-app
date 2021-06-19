import {Icon} from "../atoms/Icon";
import {Text} from "../atoms/Text";
import React from "react";
import {FaInstagram, FaWhatsapp} from "react-icons/all";

export interface ContactInfoProps {
}

export const ContactInfo: React.FC<ContactInfoProps> = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon name={"brand"}/>
            <Text variant={"title"}>Bienvenido a la Familia Rigolo!</Text>
            <Text variant={"paragraph"}>Consiguenos a travez de nuestras redes sociales</Text>

            <ul style={{width: '100%', padding: 10}}>
                <li style={{alignItems: "center", display: "flex", marginTop: 10}}>
                    <Icon name={'instagram'}/>
                    <Text variant={"title"}>RigoloCa</Text>
                </li>
                <li style={{alignItems: "center", display: "flex", marginTop: 10}}>
                    <Icon name={'whatsapp'}/>
                    <Text variant={"title"}>+58123123123</Text>
                </li>
            </ul>
        </div>
    )
}
