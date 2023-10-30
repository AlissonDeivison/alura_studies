import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}


export default function Button({ text, onClick, type }: ButtonProps) {
    return (
        <button
            className={style.botao}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
