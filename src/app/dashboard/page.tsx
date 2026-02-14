import { Card } from "@/components/ui/card";

const stats = [
  { label: "Uzivatele", value: "1,234", change: "+12%" },
  { label: "Prijem", value: "45,678 Kc", change: "+8%" },
  { label: "Objednavky", value: "89", change: "+23%" },
  { label: "Konverze", value: "3.2%", change: "+0.5%" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <p className="text-sm text-muted">{s.label}</p>
            <p className="text-2xl font-bold mt-1">{s.value}</p>
            <p className="text-sm text-green-500 mt-1">{s.change}</p>
          </Card>
        ))}
      </div>

      {/* Placeholder content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-6 h-64 flex items-center justify-center">
          <p className="text-muted">Graf — pridejte svou vizualizaci</p>
        </Card>
        <Card className="p-6 h-64 flex items-center justify-center">
          <p className="text-muted">Tabulka — pridejte sva data</p>
        </Card>
      </div>
    </div>
  );
}
