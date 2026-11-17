import LifeField from "@/components/LifeField";
import { Container, Label } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <LifeField quiet className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" fadeFrom={0.4} fadeTo={0.8} />
      <Container className="relative flex min-h-[70vh] flex-col justify-center py-24">
        <div data-field-avoid className="w-fit">
          <Label>404</Label>
        </div>
        <h1 data-field-avoid="text" className="font-display t-h1 mt-8 max-w-[12em] text-balance text-cream">
          This page could not be found.
        </h1>
      </Container>
    </main>
  );
}
