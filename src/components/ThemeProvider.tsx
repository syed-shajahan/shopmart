declare module 'next-themes' {
  import * as React from 'react';

  export interface ThemeProviderProps {
    enableSystem?: boolean;
    attribute?: string;
    defaultTheme?: string;
    themes?: string[];
    forcedTheme?: string;
    disableTransitionOnChange?: boolean;
    children?: React.ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export function useTheme(): { theme: string | undefined; setTheme: (theme: string) => void; systemTheme: string | undefined };
}
