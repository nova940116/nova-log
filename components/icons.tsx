import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  LucideProps,
  Github,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.5" y="3.5" width="93" height="93" fill="white"/>
      <rect x="3.5" y="3.5" width="93" height="93" stroke="black" stroke-width="7"/>
      <path d="M36.696 34.528L35.976 71.104L42.024 71.68C42.024 73.024 41.616 74.464 40.8 76H24.24L24.024 73.48C26.616 72.616 28.824 72.04 30.648 71.752C30.552 68.632 30.384 62.2 30.144 52.456C29.952 42.712 29.784 35.176 29.64 29.848C27.816 29.56 25.656 28.984 23.16 28.12L23.376 25.6H37.632L63.912 67.576L62.688 29.848C60.912 29.512 58.776 28.936 56.28 28.12L56.496 25.6H74.496C75.312 27.136 75.72 28.576 75.72 29.92C73.32 30.112 71.4 30.208 69.96 30.208L69.24 76H62.256L36.696 34.528Z" fill="black"/>
    </svg>
  ),
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: Github,
  check: Check,
}
