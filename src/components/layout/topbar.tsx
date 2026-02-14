export function Topbar() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="md:hidden">
        <span className="text-xl font-bold text-primary">SaaS</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
          U
        </div>
      </div>
    </header>
  );
}
