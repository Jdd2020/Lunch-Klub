import './index.css';

type LinkTextProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
}

const LinkText = ({ id, className, style, children, onClick }: LinkTextProps) => {
    return (
        <div
            id={id}
            className={`${className} link-text`}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default LinkText;