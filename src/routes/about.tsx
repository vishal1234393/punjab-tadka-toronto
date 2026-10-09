import { createFileRoute } from '@tanstack/react-router';
import { AboutPage, RestaurantLayout } from '@/components/restaurant';
export const Route = createFileRoute('/about')({
 head:()=>({meta:[{title:'Our Story — Punjab Tadka Toronto'},{name:'description',content:'Discover the Punjabi spirit behind Punjab Tadka Toronto: generous flavours, timeless dishes and warm hospitality.'},{property:'og:title',content:'Our Story — Punjab Tadka Toronto'},{property:'og:description',content:'Discover the Punjabi spirit behind Punjab Tadka Toronto: generous flavours, timeless dishes and warm hospitality.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <RestaurantLayout><AboutPage/></RestaurantLayout>,
});
