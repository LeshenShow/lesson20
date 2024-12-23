import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import s from "./Button.module.css"
import type { ComponentPropsWithoutRef } from "react"
type Props = {
  variant?: "primary" | "secondary" | "outlined"
  asChild?: boolean
} & ComponentPropsWithoutRef<"button">

export const Button = ({ variant = "primary", className, asChild, ...rest }: Props) => {
  const Component = asChild ? Slot : "button"

  return <Component className={clsx(s.button, s[variant], className)} {...rest} />
}
