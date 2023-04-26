export interface FoodDataProps {
    name: string;
    type: string,
    picks: number,
    price_approx: number,
    img: string
}

export interface BusySectionProps {
    emoji: string;
    header: string;
    text: string;
    img: string;
}

export interface FoodCardProps {
    food: FoodDataProps,
    variant?: 'sm' | 'lg'
}

export interface WhyFoodCardProps {
    img: string;
    icon: string;
    text: string;
}