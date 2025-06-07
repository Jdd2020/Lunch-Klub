import "./index.css";

type CardProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Card = ({ id, className, style, children }: CardProps) => {
    return (
        <div id={id} className={`${className} card`} style={style}>
            {children}
        </div>
    );
};

export default Card;