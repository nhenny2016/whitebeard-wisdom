import { siteConfig } from "@/lib/site";

export function LuminaForgeCredit() {
  const { builtBy } = siteConfig;

  return (
    <p className="border-t border-black/8 px-6 py-3 text-center text-[11px] text-gray-400">
      Site by{" "}
      <a
        href={builtBy.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 underline-offset-2 transition hover:text-gray-600 hover:underline"
      >
        {builtBy.name}
      </a>
    </p>
  );
}
