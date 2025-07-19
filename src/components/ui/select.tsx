import * as React from "react";
import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  // "cursor-pointer appearance-none rounded-full border bg-white pr-10 text-sm font-semibold transition-all outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring disabled:opacity-50 disabled:pointer-events-none",
  "cursor-pointer font-semibold appearance-none rounded-2xl border border-gray-400 bg-transparent px-3 py-2 shadow-sm placeholder:text-gray-600 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:outline-4 focus:outline-primary-light-blue focus:border-primary-teal pl-4 pr-10",
  {
    variants: {
      variant: {
        outline: "border-gray-400 text-gray-800 hover:border-primary-teal",
        filled:
          "bg-primary-light-blue text-primary-blue border border-primary-teal hover:bg-primary-teal",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
);

const selectOptionVariants = cva(
  "cursor-pointer px-3 py-2 font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "text-gray-800 hover:bg-gray-100",
        primary: "text-primary-blue hover:bg-primary-light-blue/20 focus:bg-primary-light-blue/20",
        success: "text-green-700 hover:bg-green-50 focus:bg-green-50",
        warning: "text-amber-700 hover:bg-amber-50 focus:bg-amber-50",
        danger: "text-red-700 hover:bg-red-50 focus:bg-red-50",
      },
      selected: {
        true: "bg-primary-light-blue text-primary-blue font-semibold",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      selected: false,
    },
  },
);

export { selectVariants, selectOptionVariants };

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface SelectProps {
  options: Option[];
  defaultValue?: string;
  placeholder?: string;
  variant?: "outline" | "filled";
  size?: "default" | "sm" | "lg";
  onValueChange?: (val: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultValue = "",
  placeholder = "Select",
  variant = "outline",
  size = "default",
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>(defaultValue);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onValueChange?.(value);
  };

  const selectedLabel = options.find((opt) => opt.value === selected)?.label || placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleOpen}
        className={cn(selectVariants({ variant, size }), "relative w-full pr-10 text-left")}
      >
        {selectedLabel}
        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
          <Icon icon="material-symbols:keyboard-arrow-down" width="24" height="24" />
        </span>
      </button>

      {isOpen && (
        <ul className="border-primary-teal absolute z-150 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border bg-white shadow-md">
          {options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <li
                key={option.value}
                className={cn(
                  selectOptionVariants({ selected: isSelected, variant: "default" }),
                  "w-full",
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
