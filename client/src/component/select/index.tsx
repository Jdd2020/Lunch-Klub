import "./index.css";

type SelectProps = {
    id?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    value?: string;
    placeholder?: string;
    options: { value: string; label: string }[];
    label: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};


const Select = ({ id, className, name, style, value, options, label, onChange }: SelectProps) => {
    return (
        <div className="select-container" id={id} style={style}>
            <label className="select-label">{label}</label>
            <select onChange={onChange} className={`select-input ${className}`} name={name} value={value} id={id}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div >
    );
};

export default Select;
