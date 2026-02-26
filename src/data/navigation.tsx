// src/data/navigation.ts
export interface NavItem {
  name: string;
  path: string;
}

export interface NavigationSection {
  name: string;
  items: NavItem[];
}

export const navigationItems: NavigationSection[] = [
  { name: 'Store', items: [ /* ... */ ] },
  { name: 'Apple', items: [ /* ... */ ] },
  // ... all the rest from your array
];