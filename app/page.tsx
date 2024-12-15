"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      Arsen228
      <div>
        <Button onClick={() => alert("lone")} variant={"destructive"} size="lg">
          <PawPrint />
          druid
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
