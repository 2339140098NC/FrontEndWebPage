# Movie Discovery Website

## Overview

A client-side movie discovery website that allows users to browse popular movies and search for specific titles. The application integrates with The Movie Database (TMDb) API to fetch movie data and displays results in a responsive card-based layout. Built with vanilla HTML, CSS, and JavaScript for simplicity and direct browser compatibility.

## Recent Changes

- **September 29, 2025**: Fixed layout issues by converting from float-based to CSS Grid layout
- **September 29, 2025**: Added README.md file with project documentation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure Client-Side Application**: Built entirely with vanilla HTML, CSS, and JavaScript without frameworks
- **Single Page Application (SPA)**: Dynamic content rendering without page refreshes
- **Responsive Design**: Card-based layout that adapts to different screen sizes
- **Component-Based Structure**: Modular HTML elements created dynamically via JavaScript

### Data Flow
- **API-First Approach**: All movie data sourced from external TMDb API
- **Fetch-Based Networking**: Uses modern JavaScript Fetch API for HTTP requests
- **Dynamic DOM Manipulation**: Real-time creation and insertion of HTML elements
- **Event-Driven Interactions**: Form submissions and user interactions handled via event listeners

### User Interface Design
- **Dark Theme**: Dark background (#131720) for modern movie browsing experience
- **Search-Centric Navigation**: Prominent search functionality in top navigation
- **Grid Layout**: Movies displayed in card format with poster images and titles
- **Responsive Images**: Automatic image sizing using TMDb's image service

### State Management
- **Stateless Design**: No persistent client-side state storage
- **Real-Time Updates**: Search results replace existing content immediately
- **Session-Based**: Search history and preferences not persisted across sessions

## External Dependencies

### APIs
- **The Movie Database (TMDb) API**: Primary data source for movie information
  - Endpoints: `/discover/movie` for popular movies, `/search/movie` for search functionality
  - Image CDN: `https://image.tmdb.org/t/p/w1280` for movie poster images
  - API Key Authentication: Required for all requests

### Browser APIs
- **Fetch API**: For making HTTP requests to TMDb
- **DOM API**: For dynamic HTML manipulation and event handling
- **Form API**: For handling search form submissions

### Styling
- **CSS Grid/Flexbox**: For responsive layout design
- **System Fonts**: Uses browser's default sans-serif font family
- **Custom CSS**: No external CSS frameworks or libraries