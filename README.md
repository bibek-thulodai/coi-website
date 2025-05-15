# Creating Opportunities International Website

This is the official website for Creating Opportunities International, built with Next.js, Tailwind CSS, and shadcn/ui components.

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository or extract the zip file
2. Navigate to the project directory
3. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

4. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Troubleshooting

If you encounter any issues with the installation or running the project:

1. Make sure you're using Node.js 18.x or later
2. Try clearing npm cache: `npm cache clean --force`
3. If you encounter peer dependency issues, use the `--legacy-peer-deps` flag:
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`
4. If you're having issues with the theme not matching, make sure your browser is not overriding the website styles

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/public` - Static assets
- `/lib` - Utility functions
- `/data` - Data files for the website content

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
