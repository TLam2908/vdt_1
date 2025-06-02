import {
  featureImg1,
  featureImg2,
  featureImg3,
  featureImg4,
  featureImg5,
  featureImg6,
  featureImg7,
  featureImg8,
} from ".";

import {
  ip16proImg,
  ip16Img,
  ip16eImg,
  a18Img,
  a18proImg,
  batteryImg,
  cam16proImg,
  cam16Img,
  cam16eImg,
  appleIntelligenceImg,
  controlImg,
} from ".";

import {
  reasonImg1,
  reasonImg2,
  reasonImg3,
  reasonImg4,
  reasonImg5,
  reasonImg6,
  reasonImg7,
} from ".";

export const navLists = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV",
  "Music",
  "Support",
];

export const features = [
  {
    title: "Cutting-edge Camera",
    subtitle: "Picture your best photos",
    img: featureImg1,
    color: "white",
  },
  {
    title: "Chip and Battery life",
    subtitle: "Fast that lasts",
    img: featureImg2,
    color: "white",
  },
  {
    title: "Innovation",
    subtitle: "Beautiful and durable, by design",
    img: featureImg3,
    color: "black",
  },
  {
    title: "Apple Intelligence",
    subtitle: "AI-opening possibilities",
    img: featureImg4,
    color: "white",
  },
  {
    title: "Environment",
    subtitle: "Recycle. Reuse. Repeat",
    img: featureImg5,
    color: "black",
  },
  {
    title: "Privacy",
    subtitle: "Your data. Just where you want it",
    img: featureImg6,
    color: "white",
  },
  {
    title: "Customize your iPhone",
    subtitle: "Make it your. Through and through",
    img: featureImg7,
    color: "white",
  },
  {
    title: "Peace of Mind",
    subtitle: "Helpful features. On and off the grid",
    img: featureImg8,
    color: "white",
  },
];

export const reasons = [
  {
    id: 1,
    title: "Save with Viettel Trade In",
    description: "And now thourgh June 30, get extra trade-in credit.",
    img: reasonImg1,
  },
  {
    id: 2,
    title: "Pay over time, interest-free",
    description: "With Viettel Card Monthly Installments.",
    img: reasonImg2,
  },
  {
    id: 3,
    title: "Viettel. Your one-stop shop for incredible carrier deals.",
    description:
      "Get up to $1000 in credit on a new iPhone with AT&T, Boost Mobile, T‑Mobile, or Verizon.",
    img: reasonImg3,
  },
  {
    id: 4,
    title: "Get flexible delivery and setup options",
    description:
      "Choose from free delivery, in-store pickup, or same-day delivery in select areas.",
    img: reasonImg4,
  },
  {
    id: 5,
    title: "Shop live with an expert",
    description:
      "Let us help you find the perfect iPhone for you. Schedule a one-on-one video call with an Apple Specialist.",
    img: reasonImg5,
  },
  {
    id: 6,
    title: "John an online Personal Session",
    description:
      "Taik a one-on-one video call with an Apple Specialist to get personalized help with your new iPhone.",
    img: reasonImg6,
  },
  {
    id: 7,
    title: "Explore a shopping experience like no other",
    description:
      "Visit an Viettel   Store to try iPhone, get expert advice, and enjoy personalized service.",
    img: reasonImg7,
  },
];

export const productLanding = [
  {
    id: 3,
    name: "iPhone 16 Pro",
    tagline: "The ultimate iPhone.",
    price: "$999",
    monthlyPrice: "$41.62/month. For 24 months",
    colors: ["#bfa48f", "#c2bcb2", "#f0efee", "#3c3c3d"],
    image: ip16proImg,
    intelligence: {
      image: appleIntelligenceImg,
      title: "Apple Intelligence",
    },
    chip: {
      image: a18proImg,
      title: "A18 Pro chip with 6-core GPU",
    },
    control: {
      image: controlImg,
      title: "Camera Control",
    },
    cameraSystem: {
      image: cam16proImg,
      type: "Pro camera system",
      details: [
        "Our most advanced 48MP Fusion camera",
        "5x Telephoto camera",
        "48MP Ultra Wide camera",
        "Visual Intelligence, to learn about your surroundings",
      ],
    },
    battery: {
      image: batteryImg,
      description: "Up to 33 hours video playback",
    },
  },

  {
    id: 1,
    name: "iPhone 16",
    tagline: "A total powerhouse.",
    price: "$799",
    monthlyPrice: "$33.29/month. For 24 months",
    colors: ["#94a5eb", "#abcfcd", "#eda8d5", "#f1f1f1", "#35393b"],
    image: ip16Img,
    intelligence: {
      image: appleIntelligenceImg,
      title: "Apple Intelligence",
    },
    chip: {
      image: a18Img,
      title: "A18 chip with 5-core GPU",
    },
    control: {
      image: controlImg,
      title: "Camera Control",
    },
    cameraSystem: {
      image: cam16Img,
      type: "Advanced dual-camera system",
      details: [
        "48MP Fusion camera",
        "2x Telephoto",
        "12MP Ultra Wide camera",
        "Visual Intelligence, to learn about your surroundings",
      ],
    },
    battery: {
      image: batteryImg,
      description: "Up to 27 hours video playback",
    },
  },
  {
    id: 2,
    name: "iPhone 16e",
    tagline: "Latest iPhone. Greatest price.",
    price: "$599",
    monthlyPrice: "$24.95/month. For 24 months",
    colors: ["#F5F5F5", "#35393b"],
    image: ip16eImg,
    intelligence: {
      image: appleIntelligenceImg,
      title: "Apple Intelligence",
    },
    chip: {
      image: a18Img,
      title: "A18 chip with 4-core GPU",
    },
    cameraSystem: {
      image: cam16eImg,
      type: "2-in-1 camera system",
      details: [
        "48MP Fusion camera",
        "2x Telephoto",
        "",
        "Visual Intelligence, to learn about your surroundings",
      ],
    },
    battery: {
      image: batteryImg,
      description: "Up to 26 hours video playback",
    },
  },
  // {
  //   id: 4,
  //   name: "iPhone 15",
  //   tagline: "As amazing as ever.",
  //   price: "$699",
  //   monthlyPrice: "$29.12/month. For 24 months",
  //   colors: ["#ebd0d2", "#ece6c6", "#cfd9c9", "#d5dde0", "#3c4042"],
  //   image: ip15Img,
  //   chip: {
  //     image: a16Img,
  //     title: "A16 chip with 5-core GPU",
  //   },
  //   cameraSystem: {
  //     image: cam15Img,
  //     type: "Dual-camera system",
  //     details: ["48MP Main camera", "2x Telephoto", "Ultra Wide camera", ""],
  //   },
  //   battery: {
  //     image: batteryImg,
  //     description: "Up to 26 hours video playback",
  //   }
  // },
];

export const infomationData = {
  "Explore iPhone": [
    "Explore All iPhone",
    "iPhone 16 Pro",
    "iPhone 16",
    "iPhone 16e",
    "iPhone 15",
    "",
    "Compare iPhone",
    "Switch from Android",
  ],
  "Shop iPhone": [
    "Shop iPhone",
    "iPhone Accessories",
    "Viettel Trade In",
    "Carrier Deals at Viettel",
    "Financing",
  ],
  "More from iPhone": [
    "iPhone Support",
    "ViettelCare+ for iPhone",
    "iOS 18",
    "Viettel Intelligence",
    "Apps by Viettel",
    "iPhone Privacy",
    "iCloud+",
    "Wallet, Pay, Card",
    "Siri",
  ],
};

export const footerData = {
  "Shop and Learn": [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ],
  "Viettel Wallet": ["Wallet", "Viettel Card", "Viettel Pay", "Viettel Cash"],
  Account: ["Manage Your Viettel Account", "Viettel Store Account", "iCloud.com"],
  Entertainment: [
    "Viettel One",
    "Viettel TV+",
    "Viettel Music",
    "Viettel Arcade",
    "Viettel Fitness+",
    "Viettel News+",
    "Viettel Podcasts",
    "Viettel Books",
    "App Store",
  ],
  "Viettel Store": [
    "Find a Store",
    "Genius Bar",
    "Today at Viettel",
    "Group Reservations",
    "Viettel Camp",
    "Viettel Store App",
    "Certified Refurbished",
    "Viettel Trade In",
    "Financing",
    "Carrier Deals at Viettel",
    "Order Status",
    "Shopping Help",
  ],
  "For Business": ["Viettel and Business", "Shop for Business"],
  "For Education": ["Viettel and Education", "Shop for K-12", "Shop for College"],
  "For Healthcare": [
    "Viettel in Healthcare",
    "Mac in Healthcare",
    "Health on Viettel Watch",
    "Health Records on iPhone and iPad",
  ],
  "For Government": ["Shop for Government", "Shop for Veterans and Military"],
  "Viettel Values": [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supply Chain",
  ],
  "About Viettel": [
    "Newsroom",
    "Viettel Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Viettel",
  ],
};
