import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-white hover:bg-secondary-hover shadow-sm focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  secondary:
    "bg-primary text-white hover:bg-primary-light shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  outline:
    "border border-border-strong bg-surface text-primary hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  ghost:
    "text-primary hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  light:
    "bg-white text-primary hover:bg-slate-100 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
