export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block border border-border rounded-full px-3 py-1 text-xs text-foreground">
      {name}
    </span>
  );
}
