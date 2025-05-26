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
  ip15Img,
  ip16Img,
  ip16eImg,
  a18Img,
  a16Img,
  a18proImg,
  batteryImg,
  cam16proImg,
  cam15Img,
  cam16Img,
  cam16eImg,
  appleIntelligenceImg,
  controlImg,
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

export const productLanding = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    }
  },
  {
    id: 4,
    name: "iPhone 15",
    tagline: "As amazing as ever.",
    price: "$699",
    monthlyPrice: "$29.12/month. For 24 months",
    colors: ["#ebd0d2", "#ece6c6", "#cfd9c9", "#d5dde0", "#3c4042"],
    image: ip15Img,
    chip: {
      image: a16Img,
      title: "A16 chip with 5-core GPU",
    },
    cameraSystem: {
      image: cam15Img,
      type: "Dual-camera system",
      details: ["48MP Main camera", "2x Telephoto", "Ultra Wide camera", ""],
    },
    battery: {
      image: batteryImg,
      description: "Up to 26 hours video playback",
    }
  },
];
