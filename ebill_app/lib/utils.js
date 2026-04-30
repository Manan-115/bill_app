// Minimal utility helpers used by UI components.
// Keep this small to avoid pulling extra deps.

export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}

export default { cn };

