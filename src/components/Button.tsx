import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  href: string;
}

const Button = ({ children, className, href = "", ...props }: ButtonProps) => {
  return (
    <Link
      {...props}
      href={href}
      className={`px-8 py-3.5 bg-secondary rounded-3xl text-white font-medium hover:bg-dark transition duration-300 ease-in-out ${className} text-sm`}
    >
      {children}
    </Link>
  );
};

export default Button;
