import * as Three from "three";

export type ProductLanding = {
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

export type SlideProps = {
  title: string;
  heroSubtitle: string;
  img: string;
  color: string
}

export type ProductHeroProps = {
    id: number;
    hero: string;
    text?: string;
    small: string;
    textSmall?: string;
}

export interface ProductDetails {

}

export type ProductHighlights = {
    id: number;
    title: string[];
    images: {
        large: string;
        small: string;
    }
    video?: string;
    videoDuration?: number;
}

export type ModelViewProps = {
  index: number;
  groupRef: React.RefObject<Three.Group>;
  gsapType: string;
  controlRef: React.RefObject<any>;
//   setRotation: React.Dispatch<React.SetStateAction<number>>;
  item: any;
};

export type ProductItemProps = {
    title: string;
    color: string;
    search: string;
}

type ProductDetailSlide = {
    title: string;
    image: string;
}

export type ProductDetailProps = {
    title: string[];
    description: string; 
    slide: ProductDetailSlide[];
}

export type ProductRegistrationProps = {
    name: string;
    image: string;
}