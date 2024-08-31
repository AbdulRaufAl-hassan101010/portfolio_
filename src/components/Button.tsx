import Link from "next/link";
import React, { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
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