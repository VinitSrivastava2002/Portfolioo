import { useScrollProgress } from "../hooks/useScrollProgress";
import { cn } from "../utils/cn";

const NODES = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// Signature element: a "route line" scroll rail — a nod to Vinit's
// geolocation/route-mapping project — that plots reading progress as a
// travelled path down the side of the page, with stop-markers per section.
export default function ScrollRail({ active }) {
  const progress = useScrollProgress();

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
      <div className="relative h-72 w-px bg-[var(--color-line)]">
        <div
          className="absolute top-0 left-0 w-px bg-[var(--color-azure)] transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
        {NODES.map((node, i) => (
          <a
            key={node.id}
            href={`#${node.id}`}
            className="group absolute -left-[5px] flex items-center"
            style={{ top: `${(i / (NODES.length - 1)) * 100}%` }}
          >
            <span
              className={cn(
                "block w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 bg-white",
                active === node.id
                  ? "border-[var(--color-azure)] scale-125 rail-dot"
                  : "border-[var(--color-line)] group-hover:border-[var(--color-azure-2)]"
              )}
            />
            <span className="font-mono absolute left-4 whitespace-nowrap text-[11px] tracking-wide text-[var(--color-slate)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {node.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
