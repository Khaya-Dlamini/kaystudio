import dentistImage from "../assets/denstist.png";
import elevateImage from "../assets/elevate.png";
import modeImage from "../assets/Mode.png";
import nadiaImage from "../assets/nadia.png";
import pomaImage from "../assets/poma.png";

export const PROJECTS = [
  {
    id: "kettle-cane",
    name: "Kettle & Cane Café",
    category: "Cafe & Restaurant",
    icon: "fa-mug-hot",
    gradient: "linear-gradient(135deg,#06B386,#03896f)",
    image: dentistImage,
    blurb:
      "A warm, menu-first site for a neighbourhood café — built to load fast on phones ordering from the counter queue.",
    tags: ["Menu & hours", "Mobile-first", "Local SEO"],
  },
  {
    id: "mopani-wellness",
    name: "Mopani Wellness Studio",
    category: "Wellness",
    icon: "fa-spa",
    gradient: "linear-gradient(135deg,#7c5cfc,#06B386)",
    image: elevateImage,
    blurb:
      "A calm, breathable brand site for a yoga & massage studio, with a booking flow that feels as relaxed as the space.",
    tags: ["Class schedule", "Booking flow", "Brand system"],
  },
  {
    id: "flute-fire",
    name: "Flute & Fire Music Studio",
    category: "Creative & Music",
    icon: "fa-music",
    gradient: "linear-gradient(135deg,#FFBF00,#7c5cfc)",
    image: modeImage,
    blurb:
      "A lesson-booking site for a music tutor, with audio samples and a scale that makes a one-person studio feel established.",
    tags: ["Audio embeds", "Lesson booking", "Portfolio"],
  },
  {
    id: "ubuntu-youth",
    name: "Ubuntu Youth Foundation",
    category: "Community",
    icon: "fa-people-group",
    gradient: "linear-gradient(135deg,#06B386,#7c5cfc)",
    image: nadiaImage,
    blurb:
      "A donations and impact site for a youth non-profit, built to make giving simple and the mission easy to believe in.",
    tags: ["Donations", "Impact stats", "Volunteer form"],
  },
  {
    id: "nomvula-design",
    name: "Nomvula Design Co.",
    category: "Business",
    icon: "fa-pen-nib",
    gradient: "linear-gradient(135deg,#7c5cfc,#FFBF00)",
    image: pomaImage,
    blurb:
      "A bold portfolio for an interior design studio, letting large-format photography carry the story.",
    tags: ["Case studies", "Gallery", "Enquiry form"],
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
