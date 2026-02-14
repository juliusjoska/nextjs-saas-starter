import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Registrace</h1>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-muted block mb-1">Jmeno</label>
            <Input type="text" placeholder="Jan Novak" />
          </div>
          <div>
            <label className="text-sm text-muted block mb-1">Email</label>
            <Input type="email" placeholder="vas@email.cz" />
          </div>
          <div>
            <label className="text-sm text-muted block mb-1">Heslo</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Vytvorit ucet</Button>
        </form>
        <p className="text-sm text-muted text-center mt-4">
          Uz mate ucet?{" "}
          <a href="/auth/login" className="text-primary hover:underline">
            Prihlaste se
          </a>
        </p>
      </Card>
    </div>
  );
}
