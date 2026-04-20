interface TextareaProps {
  rows?: number;
  label: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  error?: string;
}

const textareaClass = (hasError?: string) =>
  `w-full bg-transparent border-b border-gold-60 py-3 text-[14px] tracking-[0.10em] font-inter text-primary placeholder:text-subtle focus:outline-none focus:border-gold transition-all duration-300 placeholder:text-[10px] ${
    hasError ? "border-[#e07070]" : "border-gold-25 focus:border-gold"
  }`;

const Textarea = ({
  rows = 4,
  label,
  placeholder,
  required,
  value,
  onChange,
  className,
  error,
}: TextareaProps) => {
  return (
    <div>
      <div className="relative pt-5">
        <textarea
          required={required}
          placeholder={placeholder + (required && " *")}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${textareaClass(error)} resize-none ${className}`}
        />

        {
          <label
            htmlFor=""
            className={`absolute left-0 font-inter top-9 tracking-[0.10em] pointer-events-none transition-all duration-300 transform origin-left ${value ? "-translate-y-8 text-[12px] text-gold opacity-90" : "translate-y-0 text-[10px] text-muted opacity-0"}`}
          >
            {label}
            {required && " *"}
          </label>
        }
      </div>
      {error && (
        <p
          className="mt-1 font-inter text-[12px] italic"
          style={{ color: "#e07070" }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
