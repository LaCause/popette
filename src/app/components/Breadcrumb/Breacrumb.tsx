import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: Crumb[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-on-tertiary-container">{item.label}</span>
              )}
              {!isLast && <span className="text-outline">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
