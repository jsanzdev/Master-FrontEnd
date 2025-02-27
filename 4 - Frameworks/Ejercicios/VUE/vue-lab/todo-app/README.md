# Vue Todo App Documentation

A feature-rich todo application built with Vue 3, Nuxt, and Pinia for state management.

## Features

### Multiple Todo Lists
- Create multiple todo lists
- Switch between lists
- Delete lists (with confirmation)
- Persistent storage
- Responsive sidebar navigation

### Todo Management
- Add new todos
- Edit existing todos
- Mark todos as complete/incomplete
- Delete individual todos
- Bulk actions:
  - Complete all todos
  - Uncomplete all todos
  - Delete all todos

### Filtering & Search
- Filter todos by status:
  - All
  - Active
  - Completed
- Search todos by title
- Real-time filtering

### UI/UX Features
- Responsive design
- Mobile-friendly navigation
- Smooth transitions
- Confirmation dialogs
- Visual feedback

## Technical Stack

- **Framework**: Vue 3 + Nuxt 3
- **State Management**: Pinia
- **Persistence**: Local Storage
- **Styling**: Scoped CSS
- **TypeScript**: Full type safety

## Project Structure

```
todo-app/
├── components/
│   ├── TodoInput.vue
│   ├── TodoItem.vue
│   ├── TodoList.vue
│   ├── TodoLists.vue
│   ├── TodoFilter.vue
│   ├── TodoActions.vue
│   └── SearchBar.vue
├── stores/
│   └── todo-store.ts
├── types/
│   └── index.ts
└── pages/
    └── index.vue
```

## Component Overview

### TodoInput
- Handles new todo creation
- Form validation
- Clear input after submission

### TodoItem
- Displays individual todo
- Edit/Delete actions
- Completion toggle
- Double-click to edit

### TodoList
- Renders todo items
- Handles todo interactions
- Empty state handling

### TodoLists
- Manages multiple lists
- Create/Delete lists
- List navigation
- Todo count per list

### TodoFilter
- Status filtering
- Active filter indication
- All/Active/Completed options

### TodoActions
- Bulk actions
- Confirmation dialogs
- Complete/Uncomplete all
- Delete all

### SearchBar
- Real-time search
- Case-insensitive matching
- Debounced input handling

## State Management

### Store Structure
```typescript
interface State {
  lists: TodoList[];
  activeListId: number;
  editingId: number | null;
  filter: FilterType;
  searchQuery: string;
}
```

### Persistence
- Automatic state persistence
- Local storage based
- Hydration handling

## Responsive Design

### Desktop View
- Side-by-side lists and todos
- Full width content area
- Visible navigation

### Mobile View
- Toggle between lists and todos
- Hamburger menu navigation
- Optimized touch targets

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```