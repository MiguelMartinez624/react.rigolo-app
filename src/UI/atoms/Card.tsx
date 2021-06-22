import React from "react";


export interface CardProps {
    style?: any;
}

export const Card: React.FC<CardProps> = ({children,style}) => {
    return (
        <div style={{backgroundColor:"#113d5e", padding: 10, borderRadius: 1, boxShadow: '0px 2px 6px #00000029',...style}}>
            {children}
        </div>
    )
}
