This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# Pokémon Catcher

Welcome to the Pokémon Catcher project! This is a Next.js application where you can catch Pokémon, view your caught Pokémon, and navigate through different pages with pagination. This README provides an overview of the project, its features, and how to set it up and run it locally.

## Features

- **Search Functionality**: Search for a Pokémon by its name and catch it.
- **Pagination**: Navigate through pages of Pokémon with pagination (20 Pokémon per page).
- **Catch Pokémon**: Add Pokémon to your caught list by clicking the "Catch" button.
- **View Caught Pokémon**: Navigate to a separate page to see all the Pokémon you have caught.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/twangpodorji/pokemon-catcher.git
   cd pokemon-catcher

### Install dependencies:

npm install
or
yarn install

## Running the Application
1. Start the development server:
```
npm run dev
```
2. Open your browser and navigate to http://localhost:3000.

## Usage
- **Home Page:** You can search for Pokémon by typing their name in the search bar. Click the "Catch" button to add them to your caught Pokémon list. Use the pagination controls to navigate between pages.

- **Caught Page:** View all the Pokémon you have caught. You can release them by clicking the "Release" button next to each Pokémon.

## Code Structure

- /app: Contains the main application pages.
     - /app/page.js: The home page with Pokémon listing and search functionality.

     - /app/caught/page.js: The caught Pokémon page.

- /store: Manages application state.
     - store.js: Contains the global state and functions to manage Pokémon data.

- /components: Reusable UI components.
     - ui/input.js: Custom input component.
     - ui/button.js: Custom button component.
     - ui/pagination.js: Pagination component.

# 02230311_WEB101_PA2
