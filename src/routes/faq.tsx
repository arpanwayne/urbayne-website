import { createFileRoute } from '@tanstack/react-router';
import { FAQPage } from '@/components/marketing/content-pages';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/faq')({head:()=>pageHead('Frequently asked questions', 'Straightforward answers about Urbayne workflows, mobile access, account permissions and provider availability.'), component:FAQPage});
