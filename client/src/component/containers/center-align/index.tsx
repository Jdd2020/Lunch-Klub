import "./index.css";

type CenterAlignProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const CenterAlign = ({ id, className, style, children }: CenterAlignProps) => {
    return (
        <div id={id} className={`${className} center-align`} style={style}>
            {children}
        </div>
    );
};

export default CenterAlign;