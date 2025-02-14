# Vinyl Shop - React Shopping Cart Application

## Features

### Product Display
- 🎵 Browse vinyl records in a responsive grid layout
- 🖼️ Product cards with:
  - Album cover
  - Title and artist
  - Price
  - Add to cart button
  - Cart status indicator

### Shopping Cart
- 🛒 Floating cart button with item count
- 📝 Slide-in cart panel with:
  - Item list
  - Quantity adjustments
  - Remove items
  - Clear cart option
  - Total price calculation
  - Proceed to checkout button

### Checkout Process
- 🛍️ Multi-step checkout flow:
  1. Cart Review
  2. Shipping Information
  3. Payment Details
- 📋 Form validation
- 🔄 Progress tracking
- 💳 Order summary

## Technical Stack

- ⚛️ React 19
- 📦 TypeScript
- 🎨 Material-UI (MUI)
- 🔧 Component-based architecture
- 📱 Responsive design
- 🗃️ State management with React hooks

## Project Structure

```
src/
├── components/
│   ├── cart.tsx
│   ├── checkout.tsx
│   └── vinyl-list.tsx
├── types/
│   └── types.ts
└── App.tsx
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jsanzdev/Master-FrontEnd.git
cd Master-FrontEnd/4\ -\ Frameworks/Ejercicios/React/react-shop/
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Component Overview

### App.tsx
- Main application layout
- Cart state management
- Routing and navigation

### VinylList
- Displays product grid
- Handles add to cart functionality
- Shows cart status per item

### Cart
- Manages cart interactions
- Quantity updates
- Item removal
- Checkout initiation

### Checkout
- Multi-step form process
- Address collection
- Payment information
- Order summary

## State Management

- Cart items state
- Cart visibility
- Checkout process state
- Form data management