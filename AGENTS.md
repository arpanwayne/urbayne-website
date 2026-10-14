<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Marketing architecture
- Keep this TanStack marketing frontend isolated from the external campaign application's dashboard, mobile interfaces, API and authentication; the connected checkout is not the supplied Express/pnpm monorepo.
- Link workspace entry points through src/lib/marketing.ts rather than implementing local authentication; this preserves existing credentials and permissions.
- Use shared marketing layout, semantic CSS tokens and small product-preview components; sample visuals must remain noninteractive and labelled as illustrative.
- Enquiry forms validate and prepare local downloads only until an approved submission service exists; never emit a delivered state without confirmed server acknowledgement.
- Leaf content routes own unique metadata, and solutions uses an Outlet layout with an index leaf; this preserves nested routing.
- Defer canonical and sitemap origins until the isolated marketing site's public domain is confirmed; the existing product domain must not be assumed to serve this new frontend.
