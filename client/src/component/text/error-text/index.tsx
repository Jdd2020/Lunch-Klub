import './index.css';

type ErrorTextProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

const ErrorText = ({ id, className, style, children, onClick, size = "md" }: ErrorTextProps) => {
    return (
        <div
            id={id}
            className={`${className} error-text ${size}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ErrorText;