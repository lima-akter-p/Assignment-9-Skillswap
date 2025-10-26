# SkillSwap — Local Skill Exchange Platform


**Assignment:** Assignment-09_category_Sunflower


**Live demo:** (Add your deployed URL here)


## Project purpose
An interactive SPA where local users offer, learn, and trade skills. Users can browse skill listings, view details, book sessions (simple form), and authenticate using email/password or Google. Profile update and password reset flows included.


## Key features
- React single page app (SPA)
- Firebase Authentication (Email/Password + Google)
- Protected Skill Details route
- Skill listings from a local JSON file (`src/assets/skills.json`)
- Booking form with success toast (no backend booking persistence required)
- Profile update (update displayName and photoURL using `updateProfile()`)
- Forgot password flow (redirects to Gmail after reset link is sent)
- Responsive design (mobile / tablet / desktop)
- Swiper hero slider
- AOS animations
- `react-hot-toast` for notifications


## Packages used
- `react`, `react-dom`, `react-router-dom`
- `firebase`
- `swiper`
- `react-hot-toast`
- `aos`


## Environment variables (create `.env` file)
