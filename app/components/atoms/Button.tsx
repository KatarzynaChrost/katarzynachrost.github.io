import React from "react";

interface IButtonProps {
  outline?: boolean;
  onZinc?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  outline,
  type,
  onZinc,
  className,
  children,
}: IButtonProps) => {
  const gradientClass = outline ? "border-gradient" : "";
  const zincClass = onZinc ? "after:bg-zinc-900" : "";

  return (
    <button
      type={type}
      className={`transition-all duration-300 cursor-pointer text-gray-50 px-4 py-2 rounded-lg text-lg text-nowrap relative bg-radial-gradient shadow-md ${gradientClass} ${zincClass} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
