// External dependencies
import React, { ButtonHTMLAttributes } from "react";

// Internal utilities
import cx from "@/utils/cx";

// Types for different button styles
type ButtonStyles = "default" | "dark" | "secondary" | "outline" | "outlineDark" | "thirdy" | "thirdyDark";

// Define base styles and variants for the button component
const buttonStyles = {
    base: cx(
        "focus-visible:outline-none",
        "focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "focus:shadow-[0_0px_4px_0px] focus:shadow-matisse",
        "focus:border-[1px] focus:border-orient",
        "inline-flex justify-center items-center max-h-16",
        "text-base font-normal",
        "disabled:pointer-events-none disabled:opacity-50 disabled:bg-cloud",
        "transition-colors",
        "h-[50px] px-5 gap-x-4"
    ),
    variants: {
        default: "bg-aquahaze text-shark hover:bg-solitude active:bg-orient focus:bg-bg-aquahaze",
        dark: "bg-orient text-white hover:bg-bluewhale focus-visible:bg-bluewhale active:bg-bluewhale",
        secondary: "bg-white text-shark hover:bg-aquahaze focus-visible:bg-aquahaze active:bg-aquahaze",
        outline: "border border-mercury text-shark hover:border-orient focus-visible:bg-aquahaze active:bg-orient active:border-orient text-orient",
        outlineDark: "border border-orient text-shark hover:border-mercury focus-visible:bg-aquahaze active:bg-orient active:border-orient active:text-white",
        thirdy: "p-none gap-x-2.5 text-shark hover:text-matisse active:text-bluewhale font-bold",
        thirdyDark: "p-none gap-x-2.5 text-white hover:text-solitude active:text-matisse font-bold"
    },
    defaultVariant: "default" as ButtonStyles
};

// Button props type extends native button attributes and adds an optional `buttonStyle` prop
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle?: ButtonStyles;
}

/**
 * Button component: A highly reusable and customizable button component.
 * 
 * @param className - Additional CSS classes to be applied to the button
 * @param buttonStyle - Variant of the button. Defaults to the base style if not provided.
 * @param ...props - Spread of button HTML attributes.
 * @returns A React functional component.
 */
const Button: React.FC<ButtonProps> = ({
    className,
    buttonStyle = buttonStyles.defaultVariant,
    ...props
}) => {
    return (
        <button
            className={cx(buttonStyles.variants[buttonStyle], buttonStyles.base, className)}
            {...props}
        />
    );
}

export default Button;