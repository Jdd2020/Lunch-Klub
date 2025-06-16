import { MouseEvent } from "react";
import "./index.css";


type ButtonProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}



const Button = (
    { id, className, style, children, onClick, type = "button" }: ButtonProps
) => {
    return (
        <button onClick={onClick} className={className} style={style} id={id} type={type}>
            {children}
        </button>
    )
}

export default Button



