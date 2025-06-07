import "./index.css"

type TextInputProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    type?: "text" | "password" | "email" | "number";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInput = (
    { id, className, style, label, type = "text", onChange }: TextInputProps
) => {
    return (
        <div style={style} id={id} className={className}>
            <div className="text-input-container">
                <div className="text-input-label">{label}</div>
                <input type={type} className="text-input" onChange={onChange}/>
            </div>
        </div>
    )
}

export default TextInput