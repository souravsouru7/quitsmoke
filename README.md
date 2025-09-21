# Quit Easy - Progressive Web App

A comprehensive React-based Progressive Web App (PWA) designed to help users quit smoking with personalized support and tracking features.

## Features

### Progressive Web App (PWA) Capabilities
- **Installable**: Users can install the app directly on their mobile devices from the browser
- **Offline Support**: Service worker provides basic offline functionality
- **App-like Experience**: Standalone display mode for native app feel
- **Install Prompt**: Custom install prompt component for better user experience
- **Responsive Design**: Optimized for both mobile and desktop devices

### Core Functionality
- Interactive quit smoking form
- Health effects visualization
- Step-by-step guidance
- Admin dashboard for form submissions
- Modern, accessible UI with Tailwind CSS

## PWA Installation

### For Mobile Users:
1. Visit the website on your mobile browser
2. Look for the "Install" prompt that appears automatically
3. Tap "Install" to add the app to your home screen
4. The app will work like a native mobile application

### For Desktop Users:
1. Look for the install icon in your browser's address bar
2. Click the install button when prompted
3. The app will be added to your applications

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## PWA Configuration

The app includes:
- `manifest.json` - Web app manifest for PWA metadata
- `sw.js` - Service worker for offline functionality
- Multiple icon sizes for different devices
- Install prompt component for better UX

## Browser Support

- Chrome/Edge (full PWA support)
- Firefox (basic PWA support)
- Safari (iOS 11.3+ with limited PWA support)
- Mobile browsers with PWA support

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
