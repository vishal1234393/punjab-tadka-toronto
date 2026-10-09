import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage, RestaurantLayout } from '@/components/restaurant';
export const Route = createFileRoute('/gallery')({
 head:()=>({meta:[{title:'Food Gallery — Punjab Tadka Toronto'},{name:'description',content:'Feast your eyes on Punjabi food: rich curries, tandoori chicken and chole bhature at Punjab Tadka Toronto.'},{property:'og:title',content:'Food Gallery — Punjab Tadka Toronto'},{property:'og:description',content:'Feast your eyes on Punjabi food: rich curries, tandoori chicken and chole bhature at Punjab Tadka Toronto.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <RestaurantLayout><GalleryPage/></RestaurantLayout>,
});
