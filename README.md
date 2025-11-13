# Meme Search App

A React application that allows users to search for popular memes from the [Imgflip API](https://api.imgflip.com/get_memes). Users can search using a text input and view matching memes in a responsive grid layout.

---

## Features

- Search memes by name using a search bar.
- Search triggered by **Enter key** or **Search button**.
- Responsive grid display of memes for different screen sizes.
- Shows “No memes found” message if there are no matching memes.
- Search button shows “Searching…” while the search is being processed.

---

## Approach

1. **Fetching Memes**  
   - On component mount, the app fetches memes from the Imgflip API using `fetch()` inside a `useEffect`.
   - All memes are stored in the `memes` state.

2. **Search Functionality**  
   - Users type a query into the `SearchBar`.
   - Search can be triggered by pressing **Enter** or clicking the search button.
   - The `handleSearch` function filters the `memes` array based on the query.
   - If the search input is empty, filtered results are cleared.

3. **Displaying Results**  
   - `MemeGrid` displays the filtered memes in a responsive grid.
   - Each meme card shows the meme image and its name.
   - If no memes match the search query, a “No memes found” message is displayed.

4. **UX Enhancements**  
   - The search button displays “Searching…” while the search is in progress.
   - Smooth transitions are applied to the heading when the search is active.
   - Cards have hover effects and consistent styling.

---

## Project Structure

src/
│
├─ App.jsx # Main component: manages state, fetches memes, handles search
├─ components/
│ ├─ SearchBar.jsx # Input and button for searching memes
│ └─ MemeGrid.jsx # Displays filtered memes in a responsive grid  


---

## Component Breakdown

### 1. App.jsx

- **Responsibilities:**
  - Fetch memes from API and store them in state.
  - Maintain the `filteredMemes` and `searchQuery` state.
  - Pass `onSearch` function to `SearchBar`.
  - Render the heading, search bar, and meme grid or no-results message.

- **State:**
  - `memes`: All memes fetched from the API.
  - `filteredMemes`: Filtered memes based on search query.
  - `searchQuery`: Current search input.

### 2. SearchBar.jsx

- **Responsibilities:**
  - Handle user input and search trigger.
  - Supports searching via **Enter key** or **button click**.
  - Shows a loading state while searching.

- **State:**
  - `query`: Input value typed by the user.
  - `loading`: Boolean indicating search is in progress.

- **Props:**
  - `onSearch(query)`: Function from parent to perform the search.

### 3. MemeGrid.jsx

- **Responsibilities:**
  - Display memes in a responsive grid.
  - Show meme image and name inside cards.
  - Show a message if no memes match the search query.

- **Props:**
  - `memes`: Array of meme objects to display.

- **Features:**
  - Cards have hover shadow effects.
  - Text is centered and truncated if too long.
  - Grid adjusts to screen size with Tailwind CSS.

---

## Steps Followed

1. Initialize React project.
2. Install `lucide-react` for icons.
3. Create `SearchBar` and `MemeGrid` components.
4. Fetch memes from the Imgflip API in `App.jsx`.
5. Implement search filtering logic in `handleSearch`.
6. Add **Enter key support** for search input.
7. Add loading state for search button.
8. Style components using Tailwind CSS:
   - Responsive grid.
   - Smooth heading animation.
   - Hover effects for cards.
9. Handle edge cases:
   - No input clears results.
   - No matches show “No memes found”.
10. Test across different screen sizes and interactions.

---

