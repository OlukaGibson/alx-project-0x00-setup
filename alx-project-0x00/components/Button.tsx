import { ButtonProps } from "@/interfaces";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({ title, size = "medium", rounded = "md" }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  return (
    <button
      className={clsx(
        "bg-blue-500 text-white font-semibold",
        sizeClasses[size],
        roundedClasses[rounded]
      )}
    >
      {title}
    </button>
  );
};

export default Button;