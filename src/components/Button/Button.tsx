import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'streaming' | 'merch';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  icon,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button className={`eg-button eg-button--${variant} ${className}`} {...rest}>
      {icon && <span className="eg-button__icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
