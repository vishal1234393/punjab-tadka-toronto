import { describe, expect, it } from 'vitest';
import { formatCAD, orderTotal, contactHref, menuItems } from '@/lib/restaurant';
describe('Restaurant currency and ordering',()=>{
 it('prices Butter Chicken at 19.99 CAD',()=>{expect(menuItems.find(item=>item.id==='butter')?.price).toBe(19.99);});
 it('prices Tandoori Chicken at 21.99 CAD',()=>{expect(menuItems.find(item=>item.id==='tandoori')?.price).toBe(21.99);});
 it('prices Chole Bhature at 14.99 CAD',()=>{expect(menuItems.find(item=>item.id==='chole')?.price).toBe(14.99);});
 it('prices Paneer Tikka at 16.99 CAD',()=>{expect(menuItems.find(item=>item.id==='paneer')?.price).toBe(16.99);});
 it('prices Garlic Naan at 4.49 CAD',()=>{expect(menuItems.find(item=>item.id==='naan')?.price).toBe(4.49);});
 it('prices Chicken Biryani at 17.99 CAD',()=>{expect(menuItems.find(item=>item.id==='biryani')?.price).toBe(17.99);});
 it('shows prices in CAD dollars',()=>{expect(formatCAD(18.99)).toBe('$18.99');expect(formatCAD(4.49)).toBe('$4.49');});
 it('calculates menu subtotals in cents without currency rounding errors',()=>{expect(orderTotal({butter:2,naan:1})).toBe(44.47);expect(orderTotal({})).toBe(0);});
 it('does not fabricate phone or WhatsApp destinations when numbers are missing',()=>{expect(contactHref('phone','')).toBeNull();expect(contactHref('whatsapp','')).toBeNull();});
 it('creates a callable phone destination from a supplied international number',()=>{expect(contactHref('phone','+1 (416) 555-0123')).toBe('tel:+14165550123');});
 it('includes the selected order in a supplied WhatsApp destination',()=>{expect(contactHref('whatsapp','+1 (416) 555-0123','1 × Garlic Naan')).toBe('https://wa.me/14165550123?text=1%20%C3%97%20Garlic%20Naan');});
});
