import {
  Award,
  BadgeCheck,
  Circle,
  CircleHelp,
  Compass,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  PiggyBank,
  ScanSearch,
  ShieldCheck,
  Trophy,
} from 'lucide-react';

// Data files reference icons by name; only the icons listed here are bundled.
const icons = {
  Award,
  BadgeCheck,
  Compass,
  Gauge,
  GraduationCap,
  HeartPulse,
  HelpCircle: CircleHelp,
  Landmark,
  Leaf,
  PiggyBank,
  ScanSearch,
  ShieldCheck,
  Trophy,
};

export default function Icon({ name, size = 22, strokeWidth = 1.8, ...rest }) {
  const Cmp = icons[name] || Circle;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
