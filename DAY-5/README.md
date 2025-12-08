# Airtel Recharge Experience

Live site: https://recharge-website-251278.netlify.app/

## What’s inside
- Multi-page flow: landing, plans, recharge, login, signup
- Dynamic plans page fetching data from MockAPI (fallback data if API is unreachable)
- Plan selection flows through to recharge page with prefilled amount
- Modern, clean light theme with page-scoped CSS

## Local setup
1) Open `index.html` (or any page) in your browser via file:// or a simple server.
2) Ensure internet access so the MockAPI and fonts load.
3) Update `assets/js/main.js` `PLAN_API_URL` if your MockAPI resource path differs.

## API note
- Current URL: `https://6936a4ecf8dc350aff31a23d.mockapi.io/plans`
- Expected fields: `name`, `price`, `validity`, `dataLimit` (or `data`), `type`, optional `tag`

## Deployment
- Deployed on Netlify: https://recharge-website-251278.netlify.app/
