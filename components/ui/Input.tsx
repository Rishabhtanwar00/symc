interface InputProps {
  type?: InputTypes;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
}

type InputTypes = "text" | "email" | "password" | "date" | "number";

const inputClass = (hasError?: string) =>
  `w-full bg-transparent border-b-1 border-gold-60 py-3 text-[14px] font-inter text-primary placeholder:text-subtle focus:outline-none focus:border-gold transition-colors duration-300 ${
    hasError ? "border-[#e07070]" : "border-gold-25 focus:border-gold"
  }`;

const Input = ({
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  className,
  error,
}: InputProps) => {
  return (
    <div>
      <div className="relative pt-5">
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputClass(error)} ${className}`}
        />
        <label
          htmlFor=""
          className={`absolute left-0 font-inter bottom-4 tracking-[0.10em] pointer-events-none transition-all duration-300 transform origin-left ${value ? "-translate-y-8 text-[12px] text-gold opacity-90" : "translate-y-0 text-[10px] text-muted opacity-80"}`}
        >
          {placeholder}
          {required && " *"}
        </label>
      </div>
      {error && (
        <p
          className="mt-1 font-inter text-[11px] italic"
          style={{ color: "#e07070" }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
