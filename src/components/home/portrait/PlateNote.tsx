/** The portrait's legend: a small "On watch" caption under the plate, with a live signal. */
export default function PlateNote({ className = "" }: { className?: string }) {
  return (
    <p className={`eyebrow inline-flex items-center gap-2.5 !text-[0.65625rem] text-cream-muted ${className}`}>
      <span aria-hidden className="signal-dot is-live !h-1.5 !w-1.5" />
      On watch
    </p>
  );
}
