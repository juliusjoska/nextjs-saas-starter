import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Rychly start",
    description: "Vse pripraveno pro okamzity vyvoj. Tailwind, TypeScript, Docker.",
    icon: "⚡",
  },
  {
    title: "Dark mode",
    description: "Nativni podpora dark mode s CSS promennymi.",
    icon: "🌙",
  },
  {
    title: "Dashboard",
    description: "Zakladni dashboard layout se sidebarem a navigaci.",
    icon: "📊",
  },
  {
    title: "Docker-ready",
    description: "Multi-stage Dockerfile a docker-compose pro okamzity deploy.",
    icon: "🐳",
  },
];

const pricing = [
  {
    name: "Free",
    price: "0",
    features: ["1 uzivatel", "Zakladni funkce", "Community podpora"],
  },
  {
    name: "Pro",
    price: "499",
    features: ["10 uzivatelu", "Vsechny funkce", "Prioritni podpora", "API pristup"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Na miru",
    features: ["Neomezene", "Vlastni funkce", "Dedicovana podpora", "SLA"],
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">SaaS</span>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
              Funkce
            </a>
            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
              Cenik
            </a>
            <a href="/auth/login">
              <Button variant="outline" size="sm">Prihlasit se</Button>
            </a>
            <a href="/auth/register">
              <Button size="sm">Zkusit zdarma</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Postavte svuj{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              SaaS produkt
            </span>{" "}
            rychleji
          </h1>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Next.js sablona se vsim, co potrebujete. Auth, dashboard, dark mode, Docker — pripraveno k nasazeni.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/dashboard">
              <Button size="lg">Otevrit dashboard</Button>
            </a>
            <a href="#features">
              <Button variant="outline" size="lg">Vice info</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Co vsechno dostanete</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cenik</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <Card
                key={p.name}
                className={`p-6 ${p.popular ? "ring-2 ring-primary" : ""}`}
              >
                {p.popular && (
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    Nejoblibenejsi
                  </span>
                )}
                <h3 className="text-xl font-bold mt-2">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{p.price === "Na miru" ? "" : `${p.price} Kc`}</span>
                  {p.price === "Na miru" ? (
                    <span className="text-2xl font-bold">{p.price}</span>
                  ) : (
                    <span className="text-muted text-sm"> /mesic</span>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-muted flex items-center gap-2">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={p.popular ? "default" : "outline"} className="w-full">
                  Zacit
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} SaaS Starter. Vsechna prava vyhrazena.
        </div>
      </footer>
    </div>
  );
}
