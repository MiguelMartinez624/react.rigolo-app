import React from "react";

const inputStyle = {
    fontSize: '14px',
    display: 'block',
    background: 'none',
    width: '100%',
    border: 'none',
    height: '26px',
    outline: 'none',

}
const inputContainerStyle: any = {
    margin: 5,
    marginBottom: 10,
    paddingLeft: 7,
    width: '100%',
    position: 'relative',
    display: 'flex',
    height: '35px',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, .41)',
    backgroundColor: 'none',
    borderRadius: '4px',
}

const labelStyle: any = {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    pointerEvents: 'none',
    transition: '0.3s ease all',
}

const floatingLabel: any = {
    transition: '0.3s ease all',
    position: 'absolute',
    fontSize: 9,
    fontWeight: 'bold',
    top: -6,
    color: 'white',
    left: 10,
    background: 'none',
    paddingLeft: 3,
    paddingRight: 3,
}

export interface InputProps {
    type?: 'text';
    placeholder?: string;
    initialValue?: any;
    onValueChange?: (value: any) => void
}

export const Input: React.FC<InputProps> =
    ({
         initialValue,
         type = 'text',
         placeholder,
         onValueChange
     }) => {
        const [value, setValue] = React.useState<any>(initialValue || "");
        const handleInputChange = (ev: any) => {
            setValue(ev.target.value);
            if (onValueChange) {
                onValueChange(value);
            }
        }
        return (
            <div style={inputContainerStyle}>
                <input style={inputStyle} onChange={handleInputChange} value={value} type={type}/>
                <label style={!(value) ? labelStyle : floatingLabel}>{placeholder}</label>
            </div>
        )

    }
