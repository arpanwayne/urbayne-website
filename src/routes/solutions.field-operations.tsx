import { createFileRoute } from '@tanstack/react-router';
import { SolutionPage } from '@/components/marketing/content-pages';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/solutions/field-operations')({head:()=>pageHead('Field operations', 'Discover focused field operations workflows with Urbayne and bring campaign responsibilities into focus.'), component:()=> <SolutionPage kind="field"/>});
