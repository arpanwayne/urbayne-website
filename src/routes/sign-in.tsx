import { createFileRoute } from '@tanstack/react-router';
import { SignInPage } from '@/components/marketing/content-pages';
import { pageHead } from '@/lib/marketing';
export const Route = createFileRoute('/sign-in')({head:()=>pageHead('Sign in to your workspace', 'Continue to the existing Urbayne campaign dashboard, field worker interface or reporting workspace.'), component:SignInPage});
