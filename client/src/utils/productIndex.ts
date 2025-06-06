// Hero images and text for different iPhone models

import hero16 from "../assets/product/hero/ip16/hero.png";
import hero16Text from "../assets/product/hero/ip16/hero_text.png";
import hero16Small from "../assets/product/hero/ip16/hero_xsmall.png";
import hero16TextSmall from "../assets/product/hero/ip16/hero_text_small.png";
import hero16Pro from "../assets/product/hero/ip16pro/hero.jpg";
import hero16ProText from "../assets/product/hero/ip16pro/hero_text.png";
import hero16ProSmall from "../assets/product/hero/ip16pro/hero_small.jpg";
import hero16ProTextSmall from "../assets/product/hero/ip16pro/hero_text_small.png";
import hero16e from "../assets/product/hero/ip16e/hero.jpg";
import hero16eSmall from "../assets/product/hero/ip16e/hero_small.jpg";

export const productHeroImages = {
  ip16: {
    hero: hero16,
    text: hero16Text,
    small: hero16Small,
    textSmall: hero16TextSmall,
  },
  ip16Pro: {
    hero: hero16Pro,
    text: hero16ProText,
    small: hero16ProSmall,
    textSmall: hero16ProTextSmall,
  },
  ip16e: {
    hero: hero16e,
    small: hero16eSmall,
  },
};

// Hightlight images and text for different iPhone models
import highlight16_1 from "../assets/product/highlight/ip16/1/xlarge.jpg";
import highlight16_2 from "../assets/product/highlight/ip16/2/xlarge.jpg";
import highlight16_3 from "../assets/product/highlight/ip16/3/xlarge.jpg";
import highlight16_4 from "../assets/product/highlight/ip16/4/xlarge.jpg";
import highlight16_5 from "../assets/product/highlight/ip16/5/xlarge.jpg";
import highlight16_1_small from "../assets/product/highlight/ip16/1/small.jpg";
import highlight16_2_small from "../assets/product/highlight/ip16/2/small.jpg";
import highlight16_3_small from "../assets/product/highlight/ip16/3/small.jpg";
import highlight16_4_small from "../assets/product/highlight/ip16/4/small.jpg";
import highlight16_5_small from "../assets/product/highlight/ip16/5/small.jpg";
import vid16_1 from "../assets/product/highlight/ip16/1/xlarge.mp4";
import vid16_2 from "../assets/product/highlight/ip16/2/xlarge.mp4";

import highlight16Pro_1 from "../assets/product/highlight/ip16pro/1/xlarge.jpg";
import highlight16Pro_2 from "../assets/product/highlight/ip16pro/2/xlarge.jpg";
import highlight16Pro_3 from "../assets/product/highlight/ip16pro/3/xlarge.jpg";
import highlight16Pro_4 from "../assets/product/highlight/ip16pro/4/xlarge.jpg";
import highlight16Pro_5 from "../assets/product/highlight/ip16pro/5/xlarge.jpg";
import highlight16Pro_6 from "../assets/product/highlight/ip16pro/6/xlarge.jpg";
import highlight16Pro_1_small from "../assets/product/highlight/ip16pro/1/small.jpg";
import highlight16Pro_2_small from "../assets/product/highlight/ip16pro/2/small.jpg";
import highlight16Pro_3_small from "../assets/product/highlight/ip16pro/3/small.jpg";
import highlight16Pro_4_small from "../assets/product/highlight/ip16pro/4/small.jpg";
import highlight16Pro_5_small from "../assets/product/highlight/ip16pro/5/small.jpg";
import highlight16Pro_6_small from "../assets/product/highlight/ip16pro/6/small.jpg";
import vid16Pro_1 from "../assets/product/highlight/ip16pro/1/xlarge.mp4";
import vid16Pro_2 from "../assets/product/highlight/ip16pro/2/xlarge.mp4";
import vid16Pro_3 from "../assets/product/highlight/ip16pro/3/xlarge.mp4";
import vid16Pro_5 from "../assets/product/highlight/ip16pro/5/xlarge.mp4";

import highlight16e_1 from "../assets/product/highlight/ip16e/1/xlarge.jpg";
import highlight16e_2 from "../assets/product/highlight/ip16e/2/xlarge.jpg";
import highlight16e_3 from "../assets/product/highlight/ip16e/3/xlarge.jpg";
import highlight16e_4 from "../assets/product/highlight/ip16e/4/xlarge.jpg";
import highlight16e_5 from "../assets/product/highlight/ip16e/5/xlarge.jpg";
import highlight16e_1_small from "../assets/product/highlight/ip16e/1/small.jpg";
import highlight16e_2_small from "../assets/product/highlight/ip16e/2/small.jpg";
import highlight16e_3_small from "../assets/product/highlight/ip16e/3/small.jpg";
import highlight16e_4_small from "../assets/product/highlight/ip16e/4/small.jpg";
import highlight16e_5_small from "../assets/product/highlight/ip16e/5/small.jpg";
import vid16e_1 from "../assets/product/highlight/ip16e/1/xlarge.mp4";
import vid16e_2 from "../assets/product/highlight/ip16e/2/xlarge.mp4";
import vid16e_3 from "../assets/product/highlight/ip16e/3/xlarge.mp4";
import vid16e_4 from "../assets/product/highlight/ip16e/4/xlarge.mp4";
import vid16e_5 from "../assets/product/highlight/ip16e/5/xlarge.mp4";

export const productHighlightImages = {
  ip16: [
    {
      id: 1,
      title: [
        "The first iPhone built",
        "for Apple Intelligence.",
        "Personal, private, powerful",
      ],
      images: {
        large: highlight16_1,
        small: highlight16_1_small,
      },
      video: vid16_1,
      videoDuration: 5, // Duration in seconds
    },
    {
      id: 2,
      title: [
        "Camera Control.",
        "Get the perfect photo.",
        "While barely lifting a finger.",
      ],

      images: {
        large: highlight16_2,
        small: highlight16_2_small,
      },
      video: vid16_2,
      videoDuration: 3,
    },
    {
      id: 3,
      title: ["The all-new chip that empowers Apple Intelligence.", "And you."],
      images: {
        large: highlight16_3,
        small: highlight16_3_small,
      },
    },
    {
      id: 4,
      title: ["A big boost in battery life?", "Yes, please."],
      images: {
        large: highlight16_4,
        small: highlight16_4_small,
      },
    },
    {
      id: 5,
      title: [
        "New Ultra Wide camera.",
        "Take your photos further.",
        "And closer.",
      ],
      images: {
        large: highlight16_5,
        small: highlight16_5_small,
      },
    },
  ],
  ip16Pro: [
    {
      id: 1,
      title: [
        "The first iPhone built",
        "for Apple Intelligence.",
        "Personal, private, powerful",
      ],
      images: {
        large: highlight16Pro_1,
        small: highlight16Pro_1_small,
      },
      video: vid16Pro_1,
      videoDuration: 5, // Duration in seconds
    },
    {
      id: 2,
      title: [
        "So fast. So fluid.",
        "Get a feel for the all-new.",
        "Camera Control.",
      ],
      images: {
        large: highlight16Pro_2,
        small: highlight16Pro_2_small,
      },
      video: vid16Pro_2,
      videoDuration: 5,
    },
    {
      id: 3,
      title: [
        "4K 120 fps Dolby Vision.",
        "4 studio-quality mics.",
        "A Pro studio in your pocket.",
      ],
      images: {
        large: highlight16Pro_3,
        small: highlight16Pro_3_small,
      },
      video: vid16Pro_3,
      videoDuration: 5,
    },
    {
      id: 4,
      title: [
        "Our thinnest borders yet — for",
        "even larger displays. Brilliant.",
      ],
      images: {
        large: highlight16Pro_4,
        small: highlight16Pro_4_small,
      },
    },
    {
      id: 5,
      title: [
        "All-new A18 Pro chip powers",
        "unrivaled intelligence. And",
        "unprecedented performance.",
      ],
      images: {
        large: highlight16Pro_5,
        small: highlight16Pro_5_small,
      },
      video: vid16Pro_5,
      videoDuration: 5,
    },
    {
      id: 6,
      title: ["A huge leap in battery life.", "Game on."],
      images: {
        large: highlight16Pro_6,
        small: highlight16Pro_6_small,
      },
    },
  ],
  ip16e: [
    {
      id: 1,
      title: ["Beautiful, durable design.", "Built to last."],
      images: {
        large: highlight16e_1,
        small: highlight16e_1_small,
      },
      video: vid16e_1,
      videoDuration: 3, // Duration in seconds
    },
    {
      id: 2,
      title: [
        "Built for Apple Intelligence",
        "Powered by A18, the latest‑generation chip.",
      ],
      images: {
        large: highlight16e_2,
        small: highlight16e_2_small,
      },
      video: vid16e_2,
      videoDuration: 5, // Duration in seconds
    },
    {
      id: 3,
      title: ["Supersized battery life.", "Up to 26 hours of video playback."],
      images: {
        large: highlight16e_3,
        small: highlight16e_3_small,
      },
      video: vid16e_3,
      videoDuration: 4, // Duration in seconds
    },
    {
      id: 4,
      title: ["48MP Fusion camera.", "All you need.", "For all you shoot."],
      images: {
        large: highlight16e_4,
        small: highlight16e_4_small,
      },
      video: vid16e_4,
      videoDuration: 3, // Duration in seconds
    },
    {
      id: 5,
      title: ["iOS 18. Customize. Stylize.", "Mesmerize."],
      images: {
        large: highlight16e_5,
        small: highlight16e_5_small,
      },
      video: vid16e_5,
      videoDuration: 3, // Duration in seconds
    },
  ],
};

// Product details for different iPhone models
import detail16_1 from "../assets/product/detail/ip16/1/xlarge.jpg";
import detail16_2 from "../assets/product/detail/ip16/2/xlarge.jpg";
import detail16_3 from "../assets/product/detail/ip16/3/xlarge.jpg";
import detail16_4 from "../assets/product/detail/ip16/4/xlarge.jpg";

import detail16Pro_1 from "../assets/product/detail/ip16pro/1/xlarge.jpg";
import detail16Pro_2 from "../assets/product/detail/ip16pro/2/xlarge.jpg";
import detail16Pro_3 from "../assets/product/detail/ip16pro/3/xlarge.jpg";
import detail16Pro_4 from "../assets/product/detail/ip16pro/4/xlarge.jpg";

import detail16e_1 from "../assets/product/detail/ip16e/1/xlarge.jpg";
import detail16e_2 from "../assets/product/detail/ip16e/2/xlarge.jpg";
import detail16e_3 from "../assets/product/detail/ip16e/3/xlarge.jpg";
import detail16e_4 from "../assets/product/detail/ip16e/4/xlarge.jpg";
import detail16e_5 from "../assets/product/detail/ip16e/5/xlarge.jpg";

export const productDetailImages = {
  ip16: {
    title: ["Take total Camera Control.", "Touch. Zoom. Click. Quick."],
    description:
      "Camera Control is a new way to take photos and videos on iPhone 16. It’s a simple, intuitive way to capture the moment with just a touch, zoom, or click.",
    slide: [
      {
        title:
          "Click to launch the Camera app. Click again to instantly take a photo.",
        image: detail16_1,
      },
      {
        title: "Click and hold to start recording video.",
        image: detail16_2,
      },
      {
        title: "A light press opens controls like zoom.",
        image: detail16_3,
      },
      {
        title:
          "With a double light press, you can select another camera setting.",
        image: detail16_4,
      },
    ],
  },
  ip16Pro: {
    title: ["Strength. Beauty. Titanium."],
    description:
      "iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted texture. Titanium has one of the highest strength-to-weight ratios of any metal, making these models incredibly strong and impressively light. iPhone 16 Pro comes in four stunning finishes — including new Desert Titanium.",
    slide: [
      {
        title: "iPhone 16 Pro Max has our largest iPhone display ever.",
        image: detail16Pro_1,
      },
      {
        title: "The thinnest borders on any Apple product",
        image: detail16Pro_2,
      },
      {
        title: "Premium Grade 5 titanium is exceptionally durable",
        image: detail16Pro_3,
      },
      {
        title:
          "Four striking colors, from Black Titanium to new Desert Titanium",
        image: detail16Pro_4,
      },
    ],
  },
  ip16e: {
    title: ["Drop-dead gorgeous.", "Drop-tested tough."],
    description:
      "iPhone 16e has an incredible design — inside and out — and is available in an elegant black or white finish. Made from durable aerospace‑grade aluminum, the enclosure on iPhone 16e is built to go the distance and survive life’s oops, whoops, and oh nooos.",
    slide: [
      {
        title: "Tougher than any smartphone glass.",
        subTitle: "Ceramic Shield",
        image: detail16e_1,
      },
      {
        title: "A fast track to your favorite feature.",
        subTitle: "Action Button",
        image: detail16e_2,
      },
      {
        title: "One. For all.",
        subTitle: "USB-C",
        image: detail16e_3,
      },
      {
        title: "Put your best face forward.",
        subTitle: "Face ID",
        image: detail16e_4,
      },
      {
        title: "Colors? We’ve got you covered.",
        subTitle: "Color",
        image: detail16e_5,
      },
    ],
  },
};

// List of iPhone models

import ip16All from "../assets/product/item/ip16/all/xlarge.jpg";
import ip16All_small from "../assets/product/item/ip16/all/small.jpg";
import ip16Ultramarine from "../assets/product/item/ip16/ultramarine/xlarge.jpg";
import ip16Ultramarine_small from "../assets/product/item/ip16/ultramarine/small.jpg";
import ip16Teal from "../assets/product/item/ip16/teal/xlarge.jpg";
import ip16Teal_small from "../assets/product/item/ip16/teal/small.jpg";
import ip16Black from "../assets/product/item/ip16/black/xlarge.jpg";
import ip16Black_small from "../assets/product/item/ip16/black/small.jpg";
import ip16White from "../assets/product/item/ip16/white/xlarge.jpg";
import ip16White_small from "../assets/product/item/ip16/white/small.jpg";

import ip16ProAll from "../assets/product/item/ip16pro/all/xlarge.jpg";
import ip16ProAll_small from "../assets/product/item/ip16pro/all/small.jpg";
import ip16ProBlack from "../assets/product/item/ip16pro/black/xlarge.jpg";
import ip16ProBlack_small from "../assets/product/item/ip16pro/black/small.jpg";
import ip16ProWhite from "../assets/product/item/ip16pro/white/xlarge.jpg";
import ip16ProWhite_small from "../assets/product/item/ip16pro/white/small.jpg";
import ip16ProGold from "../assets/product/item/ip16pro/golden/xlarge.jpg";
import ip16ProGold_small from "../assets/product/item/ip16pro/golden/small.jpg";
import ip16ProSilver from "../assets/product/item/ip16pro/gray/xlarge.jpg";
import ip16ProSilver_small from "../assets/product/item/ip16pro/gray/small.jpg";

export const productListImages = {
  ip16: {
    all: {
      large: ip16All,
      small: ip16All_small,
    },
    ultramarine: {
      large: ip16Ultramarine,
      small: ip16Ultramarine_small,
    },
    teal: {
      large: ip16Teal,
      small: ip16Teal_small,
    },
    black: {
      large: ip16Black,
      small: ip16Black_small,
    },
    white: {
      large: ip16White,
      small: ip16White_small,
    },
  },
  ip16Pro: {
    all: {
      large: ip16ProAll,
      small: ip16ProAll_small,
    },
    black: {
      large: ip16ProBlack,
      small: ip16ProBlack_small,
    },
    white: {
      large: ip16ProWhite,
      small: ip16ProWhite_small,
    },
    gold: {
      large: ip16ProGold,
      small: ip16ProGold_small,
    },
    silver: {
      large: ip16ProSilver,
      small: ip16ProSilver_small,
    },
  },
};

// AI images

import ai16 from "../assets/product/ai/ip16/xlarge.jpg";
import ai16_small from "../assets/product/ai/ip16/small.jpg";

import ai16Pro from "../assets/product/ai/ip16pro/xlarge.jpg";
import ai16Pro_small from "../assets/product/ai/ip16pro/small.jpg";

import ai16e_frame from "../assets/product/ai/ip16e/frame_xlarge.jpg";
import ai16e_frame_small from "../assets/product/ai/ip16e/frame_small.jpg";
import ai16e_screen from "../assets/product/ai/ip16e/screen_xlarge.jpg";
import ai16e_screen_small from "../assets/product/ai/ip16e/screen_small.jpg";

export const productAIImages = {
  ip16: {
    hero: ai16,
    small: ai16_small,
  },
  ip16Pro: {
    hero: ai16Pro,
    small: ai16Pro_small,
  },
  ip16e: {
    frame: {
      hero: ai16e_frame,
      small: ai16e_frame_small,
    },
    screen: {
      hero: ai16e_screen,
      small: ai16e_screen_small,
    },
  },
};

// Visual
import visual16 from "../assets/product/visual/ip16/large.jpg";
import visual16pro from "../assets/product/visual/ip16pro/large.jpg";
import visual16e from "../assets/product/visual/ip16e/large.jpg";

export const productVisualImages = {
  ip16: {
    name: "16",
    image: visual16,
  },
  ip16Pro: {
    name: "16Pro",
    image: visual16pro,
  },
  ip16e: {
    name: "16e",
    image: visual16e,
  },
};

export const productModels = {
  ip16: [
    {
      title: "iPhone 16 in Ultramarine",
      color: "#94a5eb",
      search: "Ultramarine",
    },
    {
      title: "iPhone 16 in Teal",
      color: "#abcfcd",
      search: "Teal",
    },
    {
      title: "iPhone 16 in Black",
      color: "#35393b",
      search: "Black",
    },
    {
      title: "iPhone 16 in White",
      color: "#f1f1f1",
      search: "White",
    },
    {
      title: "iPhone 16 in Pink",
      color: "#eda8d5",
      search: "Pink",
    },
  ],
  ip16Pro: [
    {
      title: "iPhone 16 Pro in Black Titanium",
      color: "#3c3c3d",
      search: "Pro Black",
    },
    {
      title: "iPhone 16 Pro in White Titanium",
      color: "#f0efee",
      search: "Pro White",
    },
    {
      title: "iPhone 16 Pro in Desert Titanium",
      color: "#bfa48f",
      search: "Pro Desert",
    },
    {
      title: "iPhone 16 Pro in Natural Titanium",
      color: "#c2bcb2",
      search: "Pro Natural",
    },
  ],
};
