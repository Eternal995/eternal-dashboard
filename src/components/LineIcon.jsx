import {
  Compass,
  Download,
  FlaskConical,
  Folder,
  Globe,
  Home,
  Mail,
  MessageCircle,
  Sparkles,
  Tv,
  Users,
  Video,
  Waves,
} from "lucide-react";

const icons = {
  video: Video,
  community: Users,
  chat: MessageCircle,
  home: Home,
  tv: Tv,
  download: Download,
  folder: Folder,
  compass: Compass,
  sparkle: Sparkles,
  wave: Waves,
  flask: FlaskConical,
  globe: Globe,
  mail: Mail,
};

function LineIcon({ name, className }) {
  const Icon = icons[name];
  if (!Icon) {
    return null;
  }

  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export default LineIcon;
