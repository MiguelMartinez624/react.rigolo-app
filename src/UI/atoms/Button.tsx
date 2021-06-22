import React from "react";

const buttonStyle: any = {
    padding: '0px 15px 0px 15px',
    height: 32,
    width: '100%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    justifyContent: 'center',
    cursor: 'pointer',
    background: '#fbaa2c',
    color: 'white',
}

export interface ButtonProps {
    label: string
    onClick?: () => void
    style?: any
}

export const Button: React.FC<ButtonProps> = ({label, style, onClick}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    const mergedStyles = {...buttonStyle, ...style}
    return (
        <button style={mergedStyles} onClick={handleClick}>{label}</button>
    )
}
