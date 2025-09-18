import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <main>
      <section>
        <nav>
          <Image
            src="./assets/logo.svg"
            alt="Livro Saas"
            fill
            className="object-contain"
          />
          <div></div>
        </nav>
      </section>
    </main>
  );
}
