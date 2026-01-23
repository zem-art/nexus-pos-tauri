import { getIcon, IconLibrary } from "./icon";

type IconRendererProps = {
  lib: IconLibrary,
  name: string;
  size?: number;
  className?: string;
};

export const IconRenderer = ({ lib, name, size = 24, className = "" }: IconRendererProps) => {
  const Icon = getIcon({ lib, name });

  if (!Icon) return <span className="text-red-600 font-bold uppercase">Icon not found</span>;

  return <Icon size={size} className={className} />;
};
