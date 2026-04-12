interface TextareaProps {
  rows?: number;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const textareaClass =
  "w-full bg-transparent border-b border-gold-60 py-3 text-[14px] font-cormorant text-primary placeholder:text-subtle focus:outline-none focus:border-gold transition-colors duration-300";

const Textarea = ({
  rows = 4,
  placeholder,
  required,
  value,
  onChange,
  className,
}: TextareaProps) => {
  return (
    <div>
      <textarea
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${textareaClass} resize-none ${className}`}
      />
    </div>
  );
};

export default Textarea;
