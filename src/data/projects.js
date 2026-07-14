import dentistImage from "../assets/denstist.png";
import elevateImage from "../assets/elevate.png";
import modeImage from "../assets/Mode.png";
import nadiaImage from "../assets/nadia.png";
import pomaImage from "../assets/poma.png";

export const PROJECTS = [
  {
    id: "dentist",
    name: "Dentist ",
    category: "Healthcare",
    icon: "fa-mug-hot",
    gradient: "linear-gradient(135deg,#06B386,#03896f)",
    image: dentistImage,
    blurb:
      "A clean, professional website for a modern dental practice.",
    tags: ["Healthcare", "Professional", "Local SEO"],
  },
  {
    id: "marketing agency",
    name: "Elevate Marketing Agency",
    category: "Marketing",
    icon: "fa-spa",
    gradient: "linear-gradient(135deg,#7c5cfc,#06B386)",
    image: elevateImage,
    blurb:
      "A modern marketing agency website with a focus on digital strategy and brand development.",
    tags: ["Marketing", "Business", "Digital Strategy"],
  },
  {
    id: "mode",
    name: "Mode Fashion portfolio",
    category: "Fashion",
    icon: "fa-music",
    gradient: "linear-gradient(135deg,#FFBF00,#7c5cfc)",
    image: modeImage,
    blurb:
      "A modern fashion portfolio website for a forward-thinking design studio.",
    tags: ["Fashion", "Professional", "Portfolio"],
  },
  {
    id: "Nadia Artist portfolio",
    name: "Nadia Artist portfolio",
    category: "Art",
    icon: "fa-paint-brush",
    gradient: "linear-gradient(135deg,#06B386,#7c5cfc)",
    image: nadiaImage,
    blurb:
      "A creative portfolio website for a visual artist, showcasing their work in a clean and modern design.",
    tags: ["Art", "Portfolio", "Creative"],
  },
  {
    id: "Poma theatre company",
    name: "Poma theatre company",
    category: "Arts",
    icon: "fa-theater-masks",
    gradient: "linear-gradient(135deg,#7c5cfc,#FFBF00)",
    image: pomaImage,
    blurb:
      "A vibrant theatre company website showcasing their productions and events.",
    tags: ["Theatre", "Arts", "Enquiry form"],
  },
  {
    id: "green-acres",
    name: "Green Acres Landscaping",
    category: "Business",
    icon: "fa-leaf",
    gradient: "linear-gradient(135deg,#03896f,#FFBF00)",
    blurb:
      "A straightforward service site for a landscaping crew — quote requests up front, real project photos doing the talking.",
    tags: ["Quote requests", "Service areas", "Before/after"],
  },
];

export const CATEGORIES = [
  "All",
  "Cafe & Restaurant",
  "Wellness",
  "Creative & Music",
  "Community",
  "Business",
];

export const PROJECT_TYPES = [
  { id: "business", label: "Business website", icon: "fa-briefcase" },
  { id: "portfolio", label: "Personal portfolio", icon: "fa-user" },
  { id: "blog", label: "Blog", icon: "fa-pen" },
  { id: "landing", label: "Landing page", icon: "fa-bolt" },
  { id: "other", label: "Something else", icon: "fa-comment-dots" },
];
