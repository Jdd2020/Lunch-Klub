import "./index.css";

type CheckboxProps = {
    id?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    checked?: boolean;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, className, name, style, checked, label, onChange }: CheckboxProps) => {
    return (
        <div className={`checkbox-container ${className}`} id={id} style={style}>
            <input
                type="checkbox"
                className="checkbox-input"
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label className="checkbox-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
