import { useState } from "react";
import { LayoutGrid, Wand2, MessageCircle, BookText } from "lucide-react";

const navItems = [
  { href: "#", label: "Dashboard", icon: <LayoutGrid className="w-4 h-4" /> },
  { href: "#", label: "Insights", icon: <Wand2 className="w-4 h-4" /> },
  { href: "#", label: "Transcript", icon: <BookText className="w-4 h-4" /> },
  { href: "/", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState("Chat"); // default active item

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-2">
          <img src="./logo.svg" alt="logo" />
        </a>
      </div>

      <nav className="relative">
        <ul className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-1 py-1 shadow-sm backdrop-blur">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;

            return (
              <li key={item.label}>
                <button
                  onClick={() => setActiveItem(item.label)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                    }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="w-6" />
    </div>
  );
};

export default Header;
