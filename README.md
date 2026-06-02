# Amartya Finance Society - Resource Bank

The central knowledge repository for Amartya Finance Society, the official finance society of IIT Madras BS Degree.

## Overview

This is a premium resource portal designed for finance, economics, markets, investing, research, quantitative finance, and career preparation resources. The platform serves as the society's central repository for members to access curated learning materials.

## Features

- **Search Functionality**: Real-time search across all resources by title, description, and tags
- **Category Filtering**: Filter resources by type (PDFs, Videos, Links)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Premium UI**: Professional finance-inspired design with navy, charcoal, and gold accents

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resource-bank
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
resource-bank/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Footer.tsx
│   │   ├── FilterTabs.tsx
│   │   ├── ResourceCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/             # Data files
│   │   ├── resources.json
│   │   └── resources.ts
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   └── types/            # TypeScript types
│       └── index.ts
├── assets/               # Static assets
│   ├── case-studies/     # PDF case studies
│   └── resources/        # PDF resources
└── public/               # Public files
```

## Adding Resources

Resources are managed through JSON files in the `src/data/` directory:

1. Edit `src/data/resources.json`
2. Add new resources to the appropriate category (pdfs, videos, or links)
3. Each resource requires:
   - `id`: Unique identifier
   - `title`: Resource title
   - `description`: Brief description
   - `category`: Category name
   - `tags`: Array of searchable tags
   - `file`: Path to the resource file
   - `dateAdded`: ISO date string

## Contributing

To contribute new resources:

1. Add the resource file to the appropriate `assets/` directory
2. Update `src/data/resources.json` with the resource metadata
3. Test the resource appears correctly in the portal

## License

© 2026 Amartya Finance Society. All rights reserved.
