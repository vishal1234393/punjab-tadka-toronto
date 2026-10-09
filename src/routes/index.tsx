import { createFileRoute } from '@tanstack/react-router';
import { HomePage, RestaurantLayout } from '@/components/restaurant';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'Punjab Tadka Toronto — Authentic Punjabi Kitchen'},{name:'description',content:'Discover Punjabi flavours in Toronto: butter chicken, tandoori favourites, vegetarian dishes and fresh naan. Explore Punjab Tadka Toronto.'},{property:'og:title',content:'Punjab Tadka Toronto — Authentic Punjabi Kitchen'},{property:'og:description',content:'Rooted in Punjab. Made for Toronto. Explore our Punjabi menu, food gallery and restaurant.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <RestaurantLayout><HomePage/></RestaurantLayout>,
});
