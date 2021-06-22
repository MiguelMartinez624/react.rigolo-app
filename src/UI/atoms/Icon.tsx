import React from "react";
import {FaInstagram, FaWhatsapp} from "react-icons/all";

export interface IconProps {
    name: 'brand' | 'instagram' | 'whatsapp'
    iconSize?: 'large' | 'small' | 'medium'
}

const iconsStyle = {
    'large': {fontSize: 35, color: 'white', marginRight: 10},
    'small': {fontSize: 35, color: 'white', marginRight: 10},
    'medium': {fontSize: 35, color: 'white', marginRight: 10},
}

export const Icon: React.FC<IconProps> =
    ({
         name,
         iconSize = "medium"
     }) => {
        switch (name) {
            case "brand":
                return <img height={150} src={process.env.PUBLIC_URL + '/rigolo-icon.png'}/>
            case 'instagram':
                return <FaInstagram style={iconsStyle[iconSize]}/>
            case 'whatsapp':
                return <FaWhatsapp style={iconsStyle[iconSize]}/>
        }
    }
