"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Icons } from "@/components/icons"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  return(
    <Button variant="outline" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>       
  ) 
}