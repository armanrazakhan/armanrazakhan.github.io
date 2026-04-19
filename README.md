# Portfolio Website

A simple, clean, and responsive portfolio website to showcase your projects and skills.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Navigation Menu** - Smooth scrolling navigation with active link indicators
- **Hero Section** - Eye-catching introduction with a call-to-action button
- **About Section** - Personal introduction and background
- **Projects Showcase** - Display your 3 latest projects with descriptions
- **Skills Section** - Organized skill categories (Frontend, Backend, Tools)
- **Contact Form** - Simple contact form for visitors to reach out
- **Smooth Animations** - Elements fade in smoothly as you scroll
- **Modern Styling** - Clean and professional design with a blue color scheme

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # Interactive features
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your web browser to view the website
2. Edit the content in `index.html` to personalize it with your information
3. Update projects, skills, and social links as needed
4. Customize the color scheme by editing CSS variables in `style.css`

## Customization Guide

### Change the primary color
In `style.css`, update:
```css
--primary-color: #2563eb;  /* Change this to your preferred color */
```

### Add your information
In `index.html`:
- Replace "I'm Your Name" with your actual name
- Update the "About Me" section with your bio
- Add your actual project links
- Update your skills list
- Add your social media links

### Add more projects
Copy the project card structure:
```html
<div class="project-card">
    <div class="project-image"></div>
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="#" class="project-link">View Project →</a>
</div>
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Keep project descriptions concise (2-3 lines)
- Use high-quality images for project thumbnails
- Include relevant links to GitHub repositories
- Add your actual email in the contact form
- Test on mobile devices to ensure responsiveness

## License

Free to use and modify for your portfolio!
