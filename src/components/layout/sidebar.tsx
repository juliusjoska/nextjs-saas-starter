import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Uzivatele", href: "/dashboard/users", icon: "👥" },
  { label: "Produkty", href: "/dashboard/products", icon: "📦" },
  { label: "Nastaveni", href: "/dashboard/settings", icon: "⚙️" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <span className="text-xl font-bold text-primary">SaaS</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              "text-muted hover:text-foreground hover:bg-background"
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
