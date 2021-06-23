import React, {useEffect} from "react";

const inputStyle = {
    fontSize: '14px',
    display: 'block',
    background: 'none',
    width: '100%',
    border: 'none',
    height: '26px',
    outline: 'none',
    color: 'white'

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
        const [hasFocus, setFocus] = React.useState(false);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const handleInputChange = (ev: any) => {
            setValue(ev.target.value);
            if (onValueChange) {
                onValueChange(ev.target.value);
            }
        }

        useEffect(() => {
            if (document.hasFocus() && inputRef?.current?.contains(document.activeElement)) {
                setFocus(true);
            }
        }, []);

        return (
            <div style={inputContainerStyle}>
                <input ref={inputRef}
                       onFocus={() => setFocus(true)}
                       onBlur={() => setFocus(false)}
                       style={inputStyle}
                       onChange={handleInputChange}
                       value={value} type={type}/>
                <label style={(!(value)) && !hasFocus ? labelStyle : floatingLabel}>{placeholder}</label>
            </div>
        )

    }
