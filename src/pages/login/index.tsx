import Logo from "@/assets/logo.svg";
import LoginMainArt from "@/assets/login-main-art.svg";
import {
  TypographyH2,
  TypographyText,
  TypographyTextMuted,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <Container>
      <div className="py-12 px-20 space-y-10">
        <img src={Logo} alt="Main Logo" />
      </div>
      <div className="mx-80">
        <div className="flex">
          <div className="basis-1/2 space-y-6 py-10">
            <div>
              <TypographyH2>Bem vindo!</TypographyH2>
              <TypographyTextMuted>
                Insira seu e-mail e senha para acessar o painel administrativo.
              </TypographyTextMuted>
            </div>
            <div className="space-y-2 w-96">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-backgroundSecondary"
                type="email"
                placeholder="exemplo@email.com.br"
                id="email"
              />
            </div>
            <div className="space-y-2 w-96">
              <Label htmlFor="email">Senha</Label>
              <Input
                className="bg-backgroundSecondary"
                type="password"
                placeholder="********"
                id="password"
              />
            </div>
            <div>
              <a href="#" className="hover:underline">
                Esqueci minha senha
              </a>
            </div>
            <Button className="w-96">Login</Button>
            <div className="w-96 flex justify-center space-x-2 items-center">
              <TypographyTextMuted>
                Ainda não possui uma conta ?
              </TypographyTextMuted>
              <a className="hover:underline" href="#">
                Clique aqui
              </a>
            </div>
          </div>
          <div className="basis-1/2flex items-center justify-center">
            <img className="h-128" src={LoginMainArt} alt="Main Logo" />
          </div>
        </div>
      </div>
    </Container>
  );
}
