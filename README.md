# Portfolio Website

This is my personal portfolio website, showcasing my projects, skills, and professional journey. The website is built using modern web development technologies and is designed to be responsive and user-friendly.

## Features

- Global theme toggle (light/dark mode) with favicon update
- Responsive design for all devices
- Scroll-to-top button
- Experience and project cards with accent icons
- Contact form with email delivery via Vercel serverless function

## Technologies Used

- **Frontend:** React, Tailwind CSS, JavaScript
- **Icons:** React Icons
- **Backend (Email):** Vercel Serverless Function (Nodemailer)
- **Hosting:** Vercel

## File Structure

- **public/**: Static assets (favicon, images, CV, etc.)
- **src/**: Main application code
  - **App.jsx**: Main application file
  - **main.jsx**: Entry point
  - **index.css**: Global styles and CSS variables
  - **components/**: Reusable React components (Header, Sidebar, ThemeContext, ScrollToTopButton)
  - **pages/**: Main page content (Home, ContactSection)
  - **api/**: Serverless function for contact form email
  - **assets/**: Images and downloadable files (CV, logos)

## Static Assets

- **Logos**: Located in `src/assets/images/`
  - `rclogov2.png`: Logo for light mode
  - `rclogov2-dark.png`: Logo for dark mode
- **CV**: Located in `src/assets/`
  - `Sai_Raghavan_Commandur_CV.pdf`: My downloadable CV linked in the website

## Deployment

The website is hosted on Vercel. Changes pushed to the GitHub repository are automatically deployed to the live site. A custom domain will be added soon.

---

Built and maintained by [Raghav Commandur](https://www.linkedin.com/in/raghavcommandur/)
