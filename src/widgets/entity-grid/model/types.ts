export interface EntityItem {
  id: number;
  name: string;
  subtitle?: string;
  emblem?: string | null;
}
export interface EntityGridProps {
  items: EntityItem[];
  onItemClick: (id: number) => void;
  isLoading?: boolean;
}
