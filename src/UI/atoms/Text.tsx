import React from "react";


export interface TextProps {
    variant: 'paragraph' | 'title'
}

const variantStyles: any = {
    'paragraph': {fontSize: 16},
    'title': {fontSize: 25, fontWeight: 'bold',textAlign:'center'},
}


export const Text: React.FC<TextProps> = ({variant, children}) => {

    const mergedStyles = {color: "white", ...variantStyles[variant]}
    return (
        <span style={mergedStyles}>{children}</span>
    )

}
