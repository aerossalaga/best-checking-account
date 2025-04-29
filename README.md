# Best Checking Account Website

A responsive website showcasing the best checking accounts available, with detailed comparisons and ratings.

## Overview

This project is a static website built with HTML, SCSS, and JavaScript. It features:

- Responsive design for all devices
- Interactive "Read More" functionality for company details
- Star rating system for checking accounts
- Related articles section
- Sidebar with trending posts

## Quick Start

You can simply open the `index.html` file in your browser to view the website. The compiled CSS is included in the repository.

## Installation (for development)

1. Clone the repository:
```bash
git clone https://github.com/yourusername/best-checking-account.git
cd best-checking-account
```

2. Install dependencies:
```bash
npm install
```

## Usage

Run the development server with live reloading and SCSS compilation:

```bash
npm start
```

This command:
- Watches for changes in SCSS files and compiles them to CSS
- Starts a live server that automatically reloads when files change

## Project Structure

```
best-checking-account/
├── css/                  # CSS files (including pre-compiled main.css)
├── images/               # Image assets
├── js/                   # JavaScript files
│   └── main.js           # Main JavaScript functionality
├── scss/                 # SCSS source files
│   └── main.scss         # Main SCSS file with all styles
├── index.html            # Main HTML file
├── package.json          # NPM package configuration
└── README.md             # This file
```

## Features

### Responsive Design
- Desktop, tablet, and mobile layouts
- Collapsible content sections on small screens

### Company Blocks
- Expandable content sections with "Read More" functionality
- Star rating system with custom styling
- Company logos and descriptions

### Navigation
- Breadcrumb navigation
- Related articles section
- Sidebar with trending posts

## Development

### SCSS Organization
The SCSS is organized with:
- Variables for colors, fonts, and common values
- Mixins for transitions and responsive breakpoints
- Nested selectors for component-based styling

### JavaScript
The JavaScript provides interactive elements:
- Expanding/collapsing company information sections
- Icon rotation animations
- Dynamic text changes

## License

ISC 