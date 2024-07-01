import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({
  children,
  ...props
}: ButtonProps & { className?: string }) => {
  return (
    <Link
      href="/contact"
      className={`px-5 py-3 bg-secondary rounded-3xl text-xs text-white font-semibold hover:bg-dark transition duration-300 ease-in-out ${props.className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
