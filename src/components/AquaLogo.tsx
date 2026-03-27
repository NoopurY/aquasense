import Image from "next/image";
import Link from "next/link";

type AquaLogoProps = {
  compact?: boolean;
};

export function AquaLogo({ compact = false }: AquaLogoProps) {
  return (
    <Link className="inline-flex items-center gap-3 logo-breathing" href="/">
      <Image alt="AquaSave logo" height={compact ? 38 : 52} priority src="/aquasave-logo.svg" width={compact ? 38 : 52} />
      <span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        Aqua<span className="text-cyan-300">Save</span>
      </span>
    </Link>
  );
}
