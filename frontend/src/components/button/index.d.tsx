import type { ReactNode } from "react";

type ButtonProps = {
    className?: string;
    children: ReactNode | string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export type { ButtonProps };