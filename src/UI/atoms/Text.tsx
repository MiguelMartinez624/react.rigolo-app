import React from "react";


export interface TextProps {
    variant: 'paragraph' | 'title' | 'hint',

}

const variantStyles: any = {
    'paragraph': {fontSize: 16},
    'title': {fontSize: 25, fontWeight: 'bold', textAlign: 'center'},
    'hint': {fontSize: 14, fontWeight: 'bold', fontStyle: 'italic'},
}


export const Text: React.FC<TextProps> = ({variant, children}) => {

    const mergedStyles = {color: "white", ...variantStyles[variant]}
    return (
        <span style={mergedStyles}>{children}</span>
    )

}
