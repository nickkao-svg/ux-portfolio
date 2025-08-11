import { 
  Search, 
  Layers, 
  MousePointer, 
  Code, 
  Settings, 
  Users,
  Palette,
  Zap,
  Shield,
  Target
} from 'lucide-react';

export const skills = [
  {
    name: "User Research",
    description: "Problem framing, user interviews, usability testing, and surveys to understand user needs and behaviors.",
    icon: Search
  },
  {
    name: "Information Architecture",
    description: "Information architecture, navigation systems, taxonomy, and content modeling for intuitive user experiences.",
    icon: Layers
  },
  {
    name: "Interaction Design",
    description: "User flows, wireframes, micro-interactions, and accessibility considerations for seamless interactions.",
    icon: MousePointer
  },
  {
    name: "Prototyping",
    description: "Figma, Framer, Protopie, and HTML/CSS for creating interactive prototypes and functional demos.",
    icon: Code
  },
  {
    name: "Design Systems",
    description: "Design systems, tokens, components, and governance to ensure consistency and scalability.",
    icon: Palette
  },
  {
    name: "Design Operations",
    description: "Rituals, playbooks, metrics, and research repository management for efficient design workflows.",
    icon: Settings
  },
  {
    name: "User Experience",
    description: "End-to-end user experience design with focus on user-centered design principles and methodologies.",
    icon: Users
  },
  {
    name: "Performance",
    description: "Optimizing for speed, efficiency, and smooth interactions across all touchpoints and devices.",
    icon: Zap
  },
  {
    name: "Accessibility",
    description: "Ensuring inclusive design practices and WCAG compliance for users of all abilities.",
    icon: Shield
  },
  {
    name: "Strategy",
    description: "Strategic thinking and business alignment to create impactful design solutions that drive results.",
    icon: Target
  }
] as const;

