// External dependencies
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge class names.
 * 
 * This function first utilizes `clsx` to resolve conditional classes and 
 * then leverages `twMerge` to combine and deduplicate tailwind classes.
 *
 * @param inputs - The list of class values which can include strings, objects, 
 *                 or arrays representing class names.
 * @returns A merged string of class names.
 */
const cx = (...inputs: Parameters<typeof clsx>) => {
    return twMerge(clsx(...inputs));
}

export default cx;
