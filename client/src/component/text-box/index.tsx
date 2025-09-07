import "./index.css";

import ErrorText from "../text/error-text";

type TextBoxProps = {
    id?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    label?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    rows?: number;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextBox = (
    { id, className, name, style, label, placeholder, error, onChange, value, rows = 4 }: TextBoxProps
) => {
    return (
        <div style={style} id={id} className={className}>
            <div className="text-input-container">
                <div className="text-input-label">{label}</div>
                <textarea
                    className="text-input"
                    onChange={onChange}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    rows={rows}
                />
                <ErrorText size="sm">{error}</ErrorText>
            </div>
        </div>
    )
}

export default TextBox;