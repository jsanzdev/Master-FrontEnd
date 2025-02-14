# React Lab - GitHub & Rick and Morty Explorer

## Features

### GitHub User Explorer
- 🔍 Search GitHub users by username
- 👤 View user details:
  - Profile information
  - Followers count
  - Starred repositories count
  - Organizations
- 📚 Repository list with pagination
- 📑 Repository cards showing:
  - Repository name and description
  - Primary language
  - Star count

### Rick and Morty Character Explorer
- 🎬 Browse Rick and Morty characters
- ⚡ Features:
  - Debounced character search
  - Pagination with URL state
  - Responsive grid layout
  - Shareable search URLs
- 🎭 Character detail view with:
  - Character image and name
  - Status (with color indicators)
  - Species and gender
  - Origin and current location
  - Episode appearance count

## Technical Stack

- ⚛️ React 18 with TypeScript
- 🛠️ Material-UI components
- 🧪 Custom hooks (useDebounce)
- 🔄 React Router v6
- 📱 Responsive design
- 🔗 URL parameter management

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jsanzdev/Master-FrontEnd.git
cd Master-FrontEnd/4\ -\ Frameworks/Ejercicios/React/react-lab/
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── character-detail.tsx
│   ├── character-list.tsx
│   ├── header.tsx
│   ├── member-list.tsx
│   ├── repo-list.tsx
│   └── user-detail.tsx
├── hooks/
│   └── use-debounce.ts
├── api.ts
├── App.tsx
├── detail.tsx
├── home.tsx
├── index.css
├── login.tsx
├── main.tsx
├── rick-home.tsx
├── rick-detail.tsx
├── rick-api.ts
└── router.tsx
```

## API Integration

- **GitHub API**: User data and repositories
- **Rick and Morty API**: Character information
