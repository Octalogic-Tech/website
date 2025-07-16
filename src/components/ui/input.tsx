import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Typography } from "./typography";

const inputBaseStyles =
  "rounded-2xl border border-primary-blue bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-gray-600 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:outline-4 focus:outline-primary-light-blue focus:border-primary-teal";

const inputVariants = cva(inputBaseStyles, {
  variants: {
    error: {
      true: "border-red-300 focus:outline-4 focus:outline-red-100 focus:border-red-500",
      false: "border-input",
    },
  },
  defaultVariants: {
    error: false,
  },
});

interface BaseProps extends VariantProps<typeof inputVariants> {
  error?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
}

type InputProps =
  | (BaseProps & React.InputHTMLAttributes<HTMLInputElement> & { multiline?: false })
  | (BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true });

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
  const { className, error, helperText, leftIcon, rightIcon, multiline = false, ...rest } = props;

  const sharedWrapper = "relative inline-flex items-center";
  const sharedInputClass = cn(
    inputVariants({ error }),
    leftIcon && "pl-10",
    rightIcon && "pr-10",
    className,
  );

  return (
    <div className="inline-flex flex-col space-y-1">
      <div className={cn(sharedWrapper, multiline && "items-start")}>
        {leftIcon && (
          <div
            className={cn(
              "absolute top-1/2 left-3 -translate-y-1/2",
              error ? "text-red-500" : "text-gray-600",
            )}
          >
            {leftIcon}
          </div>
        )}

        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={cn(sharedInputClass, "min-h-[80px] resize-y py-2")}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={sharedInputClass}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {rightIcon && (
          <div
            className={cn(
              "absolute top-1/2 right-3 -translate-y-1/2",
              error ? "text-red-500" : "text-gray-600",
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {helperText && (
        <Typography
          variant="captionL"
          className={cn("text-xs", error ? "text-red-500" : "text-gray-700")}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
