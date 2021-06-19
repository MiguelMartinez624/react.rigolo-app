import {useWindowSize} from "../../hooks/window-size.hookt";
import React from "react";

export interface ResponsiveBoxProps {
    sizes: {
        desktopSize: number
        mobileSize?: number;
    }


    mobile: React.ReactNode,
    desktop: React.ReactNode,

}

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({children, mobile,desktop, sizes}) => {
    const {width} = useWindowSize();
    const {desktopSize} = sizes;
    return (
        <>
            {width < desktopSize && mobile}
            {width >= desktopSize && desktop}
        </>
    )
}
