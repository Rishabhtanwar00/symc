export default function Divider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-15 h-px bg-[var(--color-gold-30)]" />
      <span className="mx-4 text-sm" style={{ color: "var(--color-gold)" }}>✦</span>
      <div className="w-15 h-px bg-[var(--color-gold-30)]" />
    </div>
  );
}
