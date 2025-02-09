import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="py-4 px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">User First Development</div>
      <ModeToggle />
    </header>
  )
}

