import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Prihlaseni</h1>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-muted block mb-1">Email</label>
            <Input type="email" placeholder="vas@email.cz" />
          </div>
          <div>
            <label className="text-sm text-muted block mb-1">Heslo</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Prihlasit se</Button>
        </form>
        <p className="text-sm text-muted text-center mt-4">
          Nemáte ucet?{" "}
          <a href="/auth/register" className="text-primary hover:underline">
            Zaregistrujte se
          </a>
        </p>
      </Card>
    </div>
  );
}
