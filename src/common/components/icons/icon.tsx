import type { IconType } from "react-icons";

// 1. Import SEMUA library yang didefinisikan di Type
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as CiIcons from "react-icons/ci";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";

export type IconLibrary = 
  | "fa" | "md" | "ai" | "bs" | "ri" | "fi" | "hi" | "bi" 
  | "ci" | "cg" | "di" | "fc" | "gi" | "go" | "gr" | "im" 
  | "io" | "io5" | "lu" | "si" | "sl" | "tb" | "ti" | "vsc";

interface GetIconProps {
  lib: IconLibrary;
  name: string;
}

export function getIcon({ lib, name }: GetIconProps): IconType | null {
  // 2. Mapping library ke object agar bisa diakses secara dinamis
  const libraries: Record<IconLibrary, Record<string, any>> = {
    fa: FaIcons,
    md: MdIcons,
    ai: AiIcons,
    bs: BsIcons,
    ri: RiIcons,
    fi: FiIcons,
    hi: HiIcons,
    bi: BiIcons,
    ci: CiIcons,
    cg: CgIcons,
    di: DiIcons,
    fc: FcIcons,
    gi: GiIcons,
    go: GoIcons,
    gr: GrIcons,
    im: ImIcons,
    io: IoIcons,
    io5: Io5Icons,
    lu: LuIcons,
    si: SiIcons,
    sl: SlIcons,
    tb: TbIcons,
    ti: TiIcons,
    vsc: VscIcons,
  };

  const icons = libraries[lib];
  
  // Pastikan library ada dan icon dengan nama tersebut ada di dalamnya
  if (icons && icons[name]) {
    return icons[name] as IconType;
  }

  return null;
}