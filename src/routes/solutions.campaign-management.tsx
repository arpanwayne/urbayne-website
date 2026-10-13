import { createFileRoute } from '@tanstack/react-router';
import { SolutionPage } from '@/components/marketing/content-pages';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/solutions/campaign-management')({head:()=>pageHead('Campaign management', 'Discover focused campaign management workflows with Urbayne and bring campaign responsibilities into focus.'), component:()=> <SolutionPage kind="campaign"/>});
