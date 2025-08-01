# Dheeresh Agarwal - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Optimized for all device sizes
- **Performance**: Lighthouse score optimized with image optimization and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Type Safety**: Strict TypeScript configuration with comprehensive type definitions
- **Code Quality**: ESLint and Prettier configuration for consistent code style
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Dark Mode**: Beautiful dark theme design

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dheereshagrwal/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Scripts

- `dev` - Start development server with Turbopack
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint errors
- `type-check` - Run TypeScript type checking
- `format` - Format code with Prettier
- `format:check` - Check code formatting
- `precommit` - Run type check, lint, and format check

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/                # UI components (shadcn/ui)
│   └── ...                # Feature components
├── lib/                   # Utility functions and types
│   ├── constants.ts       # App constants
│   ├── data.ts           # Static data
│   ├── hooks.ts          # Custom React hooks
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎨 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Geist](https://vercel.com/font)

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Additional strict options for better type safety
- Path mapping configured for clean imports

### ESLint

- Extended Next.js and TypeScript configurations
- Custom rules for code quality
- Import ordering and React best practices

### Performance

- Image optimization with multiple formats
- Package imports optimization
- Console removal in production builds

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Dheeresh Agarwal - [da11@iitbbs.ac.in](mailto:da11@iitbbs.ac.in)

Project Link: [https://dheereshagrwal.vercel.app](https://dheereshagrwal.vercel.app)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
