import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-4 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border text-primary hover:bg-primary hover:text-primary-foreground shadow hover:shadow-lg",
        secondary: "btn-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "btn-hero",
        heroOutline: "btn-hero-outline",
      },
      size: {
        default: "px-4 py-4",
        sm: "rounded px-3 py-2 text-sm",
        lg: "rounded-lg px-8 py-6 text-lg",
        icon: "p-4 w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Base styles for all buttons
    const baseStyles = {
      cursor: 'pointer',
      border: 'none',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      ...style
    };

    // Additional styles based on variant
    const variantStyles = {
      default: {
        backgroundColor: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
      },
      destructive: {
        backgroundColor: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
      },
      outline: {
        border: '2px solid hsl(var(--primary))',
        backgroundColor: 'transparent',
        color: 'hsl(var(--primary))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'hsl(var(--foreground))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
      },
      link: {
        backgroundColor: 'transparent',
        color: 'hsl(var(--primary))',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        fontWeight: '500',
        padding: 0,
      }
    };

    // Size styles
    const sizeStyles = {
      default: {
        padding: '0.75rem 1rem',
      },
      sm: {
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        borderRadius: '0.375rem',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: '1.125rem',
        borderRadius: '0.5rem',
      },
      icon: {
        padding: '0.75rem',
        width: '2.5rem',
        height: '2.5rem',
      }
    };

    // Combine styles
    const combinedStyles = {
      ...baseStyles,
      ...(variant && !['secondary', 'hero', 'heroOutline'].includes(variant) ? variantStyles[variant] : {}),
      ...(size ? sizeStyles[size] : {}),
    };

    // Handle hover styles with onMouseEnter/onMouseLeave for non-CSS class variants
    const handleMouseEnter = (e) => {
      if (variant === 'default') {
        e.target.style.backgroundColor = 'hsl(var(--primary) / 0.9)';
        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        e.target.style.transform = 'scale(1.02)';
      } else if (variant === 'outline') {
        e.target.style.backgroundColor = 'hsl(var(--primary))';
        e.target.style.color = 'hsl(var(--primary-foreground))';
        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        e.target.style.transform = 'scale(1.02)';
      } else if (variant === 'ghost') {
        e.target.style.backgroundColor = 'hsl(var(--accent))';
        e.target.style.color = 'hsl(var(--accent-foreground))';
      } else if (variant === 'destructive') {
        e.target.style.backgroundColor = 'hsl(var(--destructive) / 0.9)';
      }
      
      if (props.onMouseEnter) {
        props.onMouseEnter(e);
      }
    };

    const handleMouseLeave = (e) => {
      if (variant === 'default') {
        e.target.style.backgroundColor = 'hsl(var(--primary))';
        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        e.target.style.transform = 'scale(1)';
      } else if (variant === 'outline') {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'hsl(var(--primary))';
        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        e.target.style.transform = 'scale(1)';
      } else if (variant === 'ghost') {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'hsl(var(--foreground))';
      } else if (variant === 'destructive') {
        e.target.style.backgroundColor = 'hsl(var(--destructive))';
      }
      
      if (props.onMouseLeave) {
        props.onMouseLeave(e);
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={combinedStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };