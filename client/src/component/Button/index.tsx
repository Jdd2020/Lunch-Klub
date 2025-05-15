import { MouseEvent } from "react"
import "./index.css"


type ButtonProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}



const Button = (
    { id, className, style, children, onClick }: ButtonProps
) => {
    return (
        <button onClick={onClick} className={className} style={style} id={id}>
            {children}
        </button>
    )
}

export default Button



