interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariants;
  size?: ButtonSizes;
  type?: ButtonTypes;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

type ButtonVariants = "outline" | "fill";

type ButtonSizes = "sm" | "md" | "lg";

type ButtonTypes = "button" | "submit";

const variantClasses: Record<ButtonVariants, string> = {
  fill: `
    bg-gold text-white
    hover:bg-gold-dark
    `,

  outline: `
    border border-gold
    text-gold
    hover:bg-gold hover:text-white
  `,
};

const sizeClasses: Record<ButtonSizes, string> = {
  sm: "px-3 py-1.5 text-[9px]",
  md: "px-5 py-2 text-[10px]",
  lg: "px-7 py-3 text-[12px]",
};

const Button = ({
  label,
  icon,
  iconPosition = "left",
  variant = "outline",
  size = "md",
  type = "button",
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 font-inter font-semibold tracking-[0.18em] cursor-pointer transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {label && <span className="mt-0.5">{label}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
