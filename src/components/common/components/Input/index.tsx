interface ContainerFiltersProps {
    autoFocus?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    checked?: boolean;
    id?: string;
    disabled?: boolean;
    step?: number;
    required?: boolean;
    defaultChecked?: boolean;
    min?: number;
    max?: number;
    maxLength?: number;
    minLength?: number;
    onFocus?: React.FocusEventHandler<HTMLInputElement>; 
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>; 
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
        autoFocus,
        type,
        name,
        placeholder,
        onChange,
        value,
        checked,
        id,
        disabled,
        step,
        required,
        defaultChecked,
        min,
        max,
        maxLength,
        minLength,
        onFocus,
        onBlur,
        onKeyUp,
        onClick,
        label,
}: Readonly<ContainerFiltersProps>) => {
  return (
        <>
            <div className="relative" >
                <input  
                className="peer w-full p-2 text-xs bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                autoFocus={autoFocus}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    checked={checked}
                    id={id}
                    disabled={disabled}
                    step={step}
                    required={required}
                    defaultChecked={defaultChecked}
                    min={min}
                    max={max}
                    maxLength={maxLength}
                    minLength={minLength}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyUp={onKeyUp}
                    onClick={onClick}
                />
                <label htmlFor={id} 
                     className="absolute text-gray-500 left-2 top-2 text-xs transition-all transform scale-100 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 scale-75 -translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    {label}
                </label>
            </div>
        </>
  );
}

export default Input;
                   





