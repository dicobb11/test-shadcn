"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const ThemeOptions = [
  {
    id: 1,
    value: "light",
  },
  {
    id: 2,
    value: "dark",
  },
  {
    id: 3,
    value: "system",
  },
  {
    id: 4,
    value: "red",
  },
];

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  console.log("theme123: ", theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ThemeOptions.map((option) => (
          <DropdownMenuItem
            onClick={() => setTheme(option.value)}
            style={{
              backgroundColor: theme === option.value ? "yellow" : undefined,
            }}
          >
            {option.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
