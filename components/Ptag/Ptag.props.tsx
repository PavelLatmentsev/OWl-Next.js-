
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface IPtagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: "l" | "s" | "m";
    children: ReactNode;
}


