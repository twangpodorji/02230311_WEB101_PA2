

// Import necessary functions from zustand and zustand/middleware
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define a zustand store with persistence
const useStore = create(
  // Apply the persist middleware to store state in local storage
  persist(
    (set) => ({
      pokemons: [],
      caughtPokemons: [],
      currentPage: 1,
      totalPages: 0,
      selectedPokemon: null,

      // Fetch Pokemon data from the API
      fetchPokemons: async (page = 1) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`);
        const data = await response.json();
        const pokemonDetails = await Promise.all(data.results.map(async pokemon => {
          const res = await fetch(pokemon.url);
          return res.json();
        }));
        set({ pokemons: pokemonDetails, currentPage: page, totalPages: Math.ceil(data.count / 20) });
      },

      // Action: catch a new Pokemon
      catchPokemon: (pokemon) => set((state) => {
        // Check if the Pokemon is already caught
        if (state.caughtPokemons.find(p => p.id === pokemon.id)) {
          alert(`${pokemon.name} is already caught!`);
          return state; // Return the current state without changes
        }
        // Add the new Pokemon to the caughtPokemons array
        return { caughtPokemons: [...state.caughtPokemons, pokemon] };
      }),

      // Action: release a Pokemon by its name
      releasePokemon: (pokemon) => set((state) => ({
        caughtPokemons: state.caughtPokemons.filter(p => p.name !== pokemon.name)
      })),

      // Action: select a Pokemon
      selectPokemon: (pokemon) => set({ selectedPokemon: pokemon }),

      // Action: reset the selected Pokemon
      resetSelectedPokemon: () => set({ selectedPokemon: null })
    }),
    {
      name: 'pokemon-storage', // Name of the item in local storage
      getStorage: () => localStorage, // Specify the storage mechanism (optional)
    }
  )
);

// Export the useStore hook for usage in components
export default useStore;
