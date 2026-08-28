import {
  Clock,
  Sparkles,
  Sofa,
  Wifi,
  Waves,
  Dumbbell,
  Armchair,
  Laptop,
  Snowflake,
  Utensils,
  LucideProps,
} from "lucide-react";

const map = {
  clock: Clock,
  sparkles: Sparkles,
  sofa: Sofa,
  wifi: Wifi,
  waves: Waves,
  dumbbell: Dumbbell,
  armchair: Armchair,
  laptop: Laptop,
  snowflake: Snowflake,
  utensils: Utensils,
};

export type IconName = keyof typeof map;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp {...props} />;
}
