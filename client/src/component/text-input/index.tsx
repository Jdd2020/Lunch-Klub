import "./index.css";

import ErrorText from "../text/error-text";

type TextInputProps = {
    id?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    label?: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    placeholder?: string;
    error?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInput = (
    { id, className, name, style, label, placeholder, error, type = "text", onChange, value }: TextInputProps
) => {
    return (
        <div style={style} id={id} className={className}>
            <div className="text-input-container">
                <div className="text-input-label">{label}</div>
                <input type={type} className="text-input" onChange={onChange} placeholder={placeholder} name={name} value={value} />
                <ErrorText size="sm">{error}</ErrorText>
            </div>
        </div>
    )
}

export default TextInput