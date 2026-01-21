import { getIcon } from "./icon";

type IconRendererProps = {
  lib: "fa" | "md" | "ai" | "bs" | "ri" | "fi" | "hi" | "bi" | "ci" | "cg" | "di" | "fc" | "fi" | "gi" | "go" | "gr" | "im" | "io" | "io5" | "lu" | "si" | "sl" | "tb" | "ti" | "vsc";
  name: string;
  size?: number;
  className?: string;
};

export const IconRenderer = ({ lib, name, size = 24, className = "" }: IconRendererProps) => {
  const Icon = getIcon({ lib, name });

  if (!Icon) return <span className="text-main">Icon not found</span>;

  return <Icon size={size} className={className} />;
};
