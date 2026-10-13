import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/marketing/content-pages';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/privacy')({head:()=>pageHead('Privacy Policy — draft', 'Urbayne privacy information. Draft for legal review, not approved legal text.'), component:()=> <LegalPage kind="privacy"/>});
