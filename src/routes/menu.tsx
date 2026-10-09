import { createFileRoute } from '@tanstack/react-router';
import { MenuPage, RestaurantLayout } from '@/components/restaurant';
export const Route = createFileRoute('/menu')({
 head:()=>({meta:[{title:'Our Menu — Punjab Tadka Toronto'},{name:'description',content:'Explore butter chicken, tandoori chicken, chole bhature, paneer tikka, garlic naan and biryani with CAD menu prices.'},{property:'og:title',content:'Our Menu — Punjab Tadka Toronto'},{property:'og:description',content:'Explore butter chicken, tandoori chicken, chole bhature, paneer tikka, garlic naan and biryani with CAD menu prices.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <RestaurantLayout><MenuPage/></RestaurantLayout>,
});
