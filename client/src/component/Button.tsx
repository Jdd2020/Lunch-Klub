import { MouseEvent } from "react"


type ButtonProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButtonStyle : React.CSSProperties = {
    width: "100%",
    height: "50px",
    backgroundColor: "#FFF",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
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



