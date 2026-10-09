import feast from '@/assets/punjabi-feast.jpg';
import butter from '@/assets/butter-chicken.jpg';
import tandoori from '@/assets/tandoori-chicken.jpg';
import chole from '@/assets/chole-bhature.jpg';
import paneer from '@/assets/paneer-tikka.jpg';
import naan from '@/assets/garlic-naan.jpg';
import biryani from '@/assets/chicken-biryani.jpg';

// Edit restaurant text, contact information, menu and hours here.
// Leave unknown contact details empty rather than sending visitors to sample accounts.
export const restaurant = {
 name: 'Punjab Tadka Toronto', city: 'Toronto, Ontario, Canada',
 phone: '', whatsapp: '', email: '', address: '', orderingUrl: '',
 heroEyebrow: 'Authentic Punjabi kitchen · Toronto',
 heroTitle: 'Punjab Tadka', heroAccent: 'Toronto',
 heroDescription: 'The heart of Punjab. The flavour of home. Discover soulful curries, smoky tandoor favourites, and a little Punjabi hospitality in every bite.',
 introTitle: 'From Punjab,\nwith love.',
 introText: 'Some flavours take you straight home. A slow-simmered curry, fresh naan from the tandoor, the warmth of a meal shared. At Punjab Tadka Toronto, we bring the spirit of Punjabi cooking to your table — generous, vibrant, and full of heart.',
 hours: [{ days:'Monday – Thursday', time:'11:00 AM – 10:00 PM' },{ days:'Friday – Saturday', time:'11:00 AM – 11:00 PM' },{ days:'Sunday', time:'12:00 PM – 10:00 PM' }],
};
export const images = { feast, butter, tandoori, chole, paneer, naan, biryani };
export const menuItems = [
 { id:'butter', name:'Butter Chicken', price:19.99, category:'Curries', tag:'House favourite', vegetarian:false, image:butter, description:'Tender tandoori chicken in a velvety tomato, butter and cream sauce.' },
 { id:'tandoori', name:'Tandoori Chicken', price:21.99, category:'Tandoor', tag:'From the tandoor', vegetarian:false, image:tandoori, description:'Yogurt-marinated chicken, flame-kissed in the tandoor with bold Punjabi spices.' },
 { id:'chole', name:'Chole Bhature', price:14.99, category:'Vegetarian', tag:'Vegetarian', vegetarian:true, image:chole, description:'Spiced chickpea curry with fluffy golden bhature, pickles and fresh onions.' },
 { id:'paneer', name:'Paneer Tikka', price:16.99, category:'Vegetarian', tag:'Vegetarian', vegetarian:true, image:paneer, description:'Tandoor-roasted paneer, peppers and onions in a fragrant spiced yogurt marinade.' },
 { id:'naan', name:'Garlic Naan', price:4.49, category:'Breads & Rice', tag:'Freshly baked', vegetarian:true, image:naan, description:'Soft tandoor-baked naan brushed with garlic butter and fresh coriander.' },
 { id:'biryani', name:'Chicken Biryani', price:17.99, category:'Breads & Rice', tag:'Aromatic & hearty', vegetarian:false, image:biryani, description:'Fragrant basmati rice layered with spiced chicken, herbs and caramelized onions.' },
];
export type MenuItem = typeof menuItems[number];
export const formatCAD = (amount:number) => `$${amount.toFixed(2)}`;
export const orderTotal = (quantities:Record<string,number>) => menuItems.reduce((sum,item)=>sum+Math.round(item.price*100)*(quantities[item.id] ?? 0),0)/100;

export const contactHref = (method:'phone'|'whatsapp', number:string, message='') => {
 const digits=number.replace(/\D/g,'');
 if(!digits) return null;
 return method==='phone' ? `tel:+${digits}` : `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};
