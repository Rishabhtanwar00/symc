interface InputProps {
  type?: InputTypes;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: () => void;
  className?: string;
}

type InputTypes = "text" | "email" | "password";

const inputClass =
  "w-full bg-transparent border-b-1 border-gold-60 py-3 text-[14px] font-cormorant text-primary placeholder:text-subtle focus:outline-none focus:border-gold transition-colors duration-300";

const Input = ({
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClass} ${className}`}
      />
    </div>
  );
};

export default Input;
