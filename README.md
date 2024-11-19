# @antoineguglielmi/tw-spacing

A **TailwindCSS** spacing customizer.

## Basic usage

```bash
npm i @antoineguglielmi/tw-spacing
```
Then in `tailwind.config.ts` file:

```typescript
import { spacing } from '@antoineguglielmi/tw-spacing'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    spacing: spacing({
      baseValue: '1rem',
      baseCoeff: 1.618
    }),
  },

  plugins: [],
} satisfies Config
```

## With `globals.css`

In `globals.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* BASE SIZE */
    --base-size: 1rem;
    --base-coeff: 1.618;
  }

  @media (min-width: 640px) {
    :root {
      /* BASE SIZE */
      --base-size: 1.125rem;
    }
  }
}
```

Then in `tailwind.config.ts` file:

```typescript
import { spacing } from '@antoineguglielmi/tw-spacing'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    spacing: spacing({
      baseValue: 'var(--base-size)',
      baseCoeff: 'var(--base-coeff)'
    }),
  },

  plugins: [],
} satisfies Config
```

## Props

### `baseValue: string` - **required**
The root space value, the reference. It can be a css variable `'var(--base-size)'` or a css value `'1rem'`.

### `baseCoeff?: 'var(--<name>)'|number` - **required**
The coeff value. It can be a css variable `'var(--base-size)'` or a number `1.618`.

### `baseName?: string` - *optional*
The name of the root spacing. Defaults to `'base'`.

### `spacingNames?: Array<string>` - *optional*
The spacing names. Defaults to:
```typescript
[
    'sm-3',
    'sm-2',
    'sm-1',
    'base',
    'lg-1',
    'lg-2',
    'lg-3',
    'lg-4',
    'lg-5',
    'lg-6',
    'lg-7',
    'lg-8',
    'lg-9',
    'lg-10',
    'lg-11',
]
```

### `defaultSpacings?: Record<string, string>` - *optional*
Special default spacings. Defaults to:
```typescript
{
    none: '0',
    full: '100%',
}
```