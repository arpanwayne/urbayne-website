import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/marketing/home';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/')({head:()=>pageHead('Bring Every Campaign Into Focus', 'Plan smarter, coordinate your teams and bring campaign operations together in one connected platform with Urbayne.'), component:Home});
