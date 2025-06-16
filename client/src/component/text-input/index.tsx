import "./index.css";

type TextInputProps = {
    id?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    label?: string;
    type?: "text" | "password" | "email" | "number";
    placeholder?: string;
    error?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInput = (
    { id, className, name, style, label, placeholder, error, type = "text", onChange }: TextInputProps
) => {
    return (
        <div style={style} id={id} className={className}>
            <div className="text-input-container">
                <div className="text-input-label">{label}</div>
                <input type={type} className="text-input" onChange={onChange} placeholder={placeholder} name={name} />
                <div className="text-input-error">{error}</div>
            </div>
        </div>
    )
}

export default TextInput