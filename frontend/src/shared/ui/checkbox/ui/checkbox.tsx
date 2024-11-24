import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import clsx from "clsx"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clsx(
      "peer h-4 w-4 shrink-0 rounded-sm border border-gray-200  ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-gray-800  dark:border-gray-50 dark:ring-offset-white dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={clsx("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
