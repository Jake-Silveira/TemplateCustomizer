# Landing Page Template Customizer

A lightweight tool for creating customized landing pages in minutes. Users select from pre-built templates (inspired by real-world projects like [Sharpchoice](https://sharpchoice.example.com) and [Ravensnest](https://ravensnest.example.com)), tweak text, colors, and images, and export a static HTML/CSS/JS bundle. Designed to help freelancers, real estate agents, and small businesses get a professional online presence fast—while offering premium customization services for advanced needs.

**Live Demo**: [Try it here](#) (replace with your deployed URL)  
**Built by**: Jake Silveira ([Portfolio](#) | [Contact for Custom Dev](#))

---

## Why This Tool?

This project showcases my web dev expertise in building responsive, user-friendly interfaces with vanilla JavaScript, Supabase, and Node.js. It provides a free, easy-to-use solution for creating static landing pages, but for dynamic features like user auth, real-time data, or hosting, users can hire me for custom development. Whether you're a real estate pro needing a Sharpchoice-style site or a freelancer wanting a portfolio, this tool is your starting point.

---

## Features

| Feature | Description | Try It |
|---------|-------------|--------|
| **Template Selection** | Choose from modern templates (e.g., real estate landing, freelancer portfolio) inspired by my projects. Responsive and SEO-ready. | [Preview Templates](#) |
| **Customization Interface** | Edit headlines, colors (via CSS variables), and upload a hero image. Live preview updates instantly, built with vanilla JS. | [Try Customizer](#) |
| **Static Export** | Download a ZIP with HTML, CSS, and JS files, plus a "How to Host" guide. Perfect for quick deployment on Netlify or Vercel. | [Export Example](#) |
| **Showcase Gallery** | See pro examples like Sharpchoice (real estate) and Ravensnest (dynamic listings) to inspire your project. | [View Gallery](#) |
| **Analytics (Private)** | Tracks user activity (e.g., exports) in a Supabase-powered admin panel to identify potential clients. | (Internal use only) |

**Need more?** Add dynamic forms, Supabase auth, or e-commerce with my [custom dev services](#).

---

## Lead Generation & Monetization

This tool is a lead magnet for my web dev services:
- **Freemium Model**: Free single-template export; premium for multiple exports ($5-10 one-time) or custom dev packages ($200-500 for dynamic features like Supabase backends).
- **CTAs**: Modals prompt users to book a consultation for advanced needs (e.g., "Add real-time listings like Ravensnest"). Inquiry form mirrors Ravensnest’s setup.
- **Email Funnel**: Sign-up required for exports, triggering automated emails via Supabase Edge Functions: “Want a dynamic site like Sharpchoice? Let’s talk.”
- **Portfolio Showcasing**: Templates embed “Built by Jake” badges, linking to case studies of Ravensnest and Sharpchoice, driving inquiries.
- **Target Audience**: Real estate agents, freelancers, and small businesses—promoted via LinkedIn, Reddit (r/webdev, r/realestate), and cold emails.

**Goal**: Attract 100 users in month 1, convert 10-15% to consultations ($50-100) or full projects ($500-2000).

---

## Technical Overview

Built with my core stack to keep it lightweight and extensible:
- **Frontend**: Vanilla JavaScript for live previews and form handling (like Ravensnest’s modals). CSS Grid/Flexbox for responsive layouts, inspired by Sharpchoice.
- **Backend**: Supabase for auth, template storage, and image uploads (using buckets, as in Ravensnest). Node.js/Express for ZIP generation and analytics API.
- **Export**: JSZip creates downloadable HTML/CSS/JS bundles. Basic “How to Host” guide included.
- **Analytics**: Supabase tables log user actions (e.g., exports) for lead tracking. Admin panel reuses my tabbed dashboard patterns.
- **Deployment**: Hosted on Render (like my prior projects); optional Vercel for static assets. PWA-ready for mobile access.

**New Skills Learned**:
- Dynamic file generation with JSZip.
- User behavior tracking with Supabase queries.
- Email automation via Nodemailer/Edge Functions.
- A/B testing CTAs for conversion optimization.

---
