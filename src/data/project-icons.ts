import type { LucideIcon } from "lucide-react";
import { CloudSun, LayoutDashboard, ShoppingCart } from "lucide-react";
import type { ProjectIconKey } from "@/data/projects";

/**
 * Icon registry keyed by a serializable string. Icons must never travel as
 * component references into client components (React can't serialize
 * functions), so the data layer stores only the key and the mapping lives
 * here, next to the components that render them.
 */
export const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  cart: ShoppingCart,
  portfolio: LayoutDashboard,
  weather: CloudSun,
};
