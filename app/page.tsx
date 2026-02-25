import { LandingPage } from "@/templates/landing-page";

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Page() {

  await delay(10 * 1000)
  throw new Error("Erro simulado para teste");
  return <LandingPage/>;
}
