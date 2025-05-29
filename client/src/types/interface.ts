export interface ProductLanding {
    id: number;
    name: string;
    tagline: string;
    price: string;
    monthlyPrice?: string;
    colors: string[];
    image: string;
    intelligence?: {
        image: string;
        title: string;
    };
    chip: {
        image: string;
        title: string;
    };
    control?: {
        image: string;
        title: string;
    };
    cameraSystem: {
        image: string;
        type: string;
        details: string[];
    };
    battery: {
        image: string;
        description: string;
    };
}

export interface SlideProps {
  title: string;
  heroSubtitle: string;
  img: string;
  color: string
}