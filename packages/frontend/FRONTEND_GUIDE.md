# SkillProof Frontend Guide

## 🎨 Design System

### Theme
Located in `src/theme/theme.ts`, the design system includes:
- **Colors**: Primary, secondary, success, error, warning, and gray scales
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation system
- **Breakpoints**: Responsive design breakpoints

### Styling Approach
- **styled-components**: All components use styled-components for CSS-in-JS
- **Theme-based**: All styles reference the centralized theme
- **Responsive**: Mobile-first responsive design

## 📦 UI Components

### Core Components (`src/components/ui/`)

#### Button
- **Variants**: primary, secondary, outline, ghost, danger
- **Sizes**: sm, md, lg
- **Props**: fullWidth, disabled, onClick, as (for Next.js Link)
- **Usage**:
  ```tsx
  <Button variant="primary" size="lg">Click Me</Button>
  <Button as={Link} href="/dashboard">Go to Dashboard</Button>
  ```

#### Card
- **Padding**: sm, md, lg
- **Hover effect**: Optional hover animation
- **Usage**:
  ```tsx
  <Card padding="md" hover>Content</Card>
  ```

#### Input
- **Features**: Label, error handling, fullWidth
- **Usage**:
  ```tsx
  <Input
    type="email"
    label="Email"
    placeholder="you@example.com"
    error={errorMessage}
    fullWidth
  />
  ```

## 🏗️ Layout Components

### Header (`src/components/layout/Header.tsx`)
- Responsive navigation
- Authentication-aware (shows different links for logged in users)
- Logo and navigation links
- CTA buttons

### Footer (`src/components/layout/Footer.tsx`)
- Multi-column footer with links
- Company information
- Copyright notice

## 📄 Pages

### Landing Page (`src/app/page.tsx`)
- **Hero Section**: Gradient background with CTA buttons
- **Features Section**: Grid of feature cards
- **Modern Design**: Clean, professional UI

### Authentication Pages

#### Login (`src/app/login/page.tsx`)
- Email/password login form
- Wallet connection option
- Link to signup page

#### Signup (`src/app/signup/page.tsx`)
- Role selection (Candidate/Employer)
- Dynamic form based on role
- Wallet connection option
- Link to login page

### Dashboard Pages

#### Candidate Dashboard (`src/app/dashboard/candidate/page.tsx`)
- **Welcome Section**: Personalized greeting
- **Stats Cards**: Verified skills, average score, profile views
- **Skills Grid**: Display verified skills with scores
- **Empty State**: Helpful message when no skills verified
- **Quick Actions**: Links to profile, settings, etc.

#### Employer Dashboard (`src/app/dashboard/employer/page.tsx`)
- **Search Section**: Search candidates by skills, name, location
- **Stats Cards**: Candidates viewed, saved, searches
- **Candidates Grid**: Display verified candidates
- **Skill Badges**: Color-coded skill scores
- **Empty State**: Message when no candidates found

## 🎯 Features Implemented

✅ **Design System**
- Complete theme with colors, typography, spacing
- Consistent styling across all components

✅ **Reusable Components**
- Button, Card, Input components
- Fully typed with TypeScript

✅ **Layout Components**
- Header with authentication awareness
- Footer with links

✅ **Pages**
- Landing page with hero and features
- Login and signup pages
- Candidate and employer dashboards

✅ **Responsive Design**
- Mobile-first approach
- Grid layouts that adapt to screen size

✅ **TypeScript**
- Full type safety
- Shared types in `src/types/index.ts`

## 🚀 Next Steps

### To Connect to Backend:
1. Update API calls in components to use `apiClient` from `src/lib/api.ts`
2. Connect authentication forms to backend endpoints
3. Fetch real data for dashboards
4. Implement state management for user data

### Additional Components to Build:
- Modal/Dialog component
- Dropdown/Select component
- Toast/Notification component
- Loading spinner
- Badge component
- Progress bar
- Tabs component

### Pages to Build:
- Profile page
- Settings page
- Interview page
- Public profile page
- Skill verification flow

## 📝 Usage Examples

### Using the Theme
```tsx
import { theme } from '@/theme/theme';

const MyComponent = styled.div`
  color: ${theme.colors.primary[600]};
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
`;
```

### Creating a New Page
```tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';

export default function MyPage() {
  return (
    <>
      <Header />
      <main>
        <Card>Content</Card>
      </main>
      <Footer />
    </>
  );
}
```

## 🎨 Design Principles

1. **Consistency**: All components use the same design system
2. **Accessibility**: Semantic HTML, proper labels, keyboard navigation
3. **Responsive**: Mobile-first, works on all screen sizes
4. **Performance**: Optimized components, minimal re-renders
5. **Type Safety**: Full TypeScript coverage

## 📚 File Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── dashboard/         # Dashboard pages
│       ├── candidate/     # Candidate dashboard
│       └── employer/      # Employer dashboard
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── layout/            # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── theme/
│   └── theme.ts           # Design system
├── lib/
│   └── api.ts            # API client
├── store/
│   └── authStore.ts     # Zustand auth store
└── types/
    └── index.ts          # TypeScript types
```

## 🔧 Development

### Running the Frontend
```bash
npm run dev:frontend
# or from root
npm run dev:frontend
```

### Building
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 💡 Tips

1. **Always use the theme**: Don't hardcode colors or spacing
2. **Use TypeScript**: Leverage type safety for better DX
3. **Component composition**: Build complex UIs from simple components
4. **Responsive first**: Design mobile-first, then enhance for larger screens
5. **Accessibility**: Use semantic HTML and ARIA attributes when needed

