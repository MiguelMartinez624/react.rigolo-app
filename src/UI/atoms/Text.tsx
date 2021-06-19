import React from "react";


export interface TextProps {
    variant :'paragraph'
}
export const Text :React.FC<TextProps> = ({variant,children})=>{
    return (
        <span >{children}</span>
    )

}
