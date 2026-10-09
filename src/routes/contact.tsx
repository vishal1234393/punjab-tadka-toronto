import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, RestaurantLayout } from '@/components/restaurant';
export const Route = createFileRoute('/contact')({
 head:()=>({meta:[{title:'Contact & Location — Punjab Tadka Toronto'},{name:'description',content:'Find opening hours, Toronto location information, phone and WhatsApp contact options for Punjab Tadka Toronto.'},{property:'og:title',content:'Contact & Location — Punjab Tadka Toronto'},{property:'og:description',content:'Find opening hours, Toronto location information, phone and WhatsApp contact options for Punjab Tadka Toronto.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=> <RestaurantLayout><ContactPage/></RestaurantLayout>,
});
