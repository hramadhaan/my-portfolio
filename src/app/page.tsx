"use client";

import Contacts from "@/components/Contacts";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import WelcomeBottom from "@/components/WelcomeBottom";
import WelcomeHome from "@/components/WelcomeHome";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24">
      <div className="md:flex md:flex-col hidden">
        <Navbar />
        <Separator className="w-full" />
        <WelcomeHome />
        <Separator />
        <WelcomeBottom />
        <Experiences />
        <Contacts />
      </div>
      <div className="md:hidden flex flex-col items-center justify-center min-h-screen gap-y-6">
        <p className="font-bold text-center">Tidak support pada layar mobile</p>
        <a
          href="https://api.whatsapp.com/send?phone=15551234567"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button>
            <Phone className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </a>
      </div>
    </main>
  );
}
