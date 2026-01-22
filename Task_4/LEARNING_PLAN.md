**IMPORTANT** Only be edited when user asks

# GameHub Learning Plan - Professional Gaming Ecommerce Website

## Project Overview
**Vision:** Build a modern, professional gaming ecommerce website with interactive features and smooth animations.

**Tech Stack:** HTML5, Tailwind CSS, Vanilla JavaScript

---

## Task 1: Featured Games Card Grid - COMPLETED
**Goal:** Build a responsive grid of game cards with professional hover effects

### Completed Features:
- [x] 4 professional game cards with responsive grid (1/2/3/4 columns)
- [x] Sales badges (20% OFF, NEW, SALE, HOT) with absolute positioning
- [x] Genre tags (Action, Racing, Shooter) in normal document flow
- [x] Star ratings and pricing
- [x] Smooth hover animations (card lift, image zoom, button hover)
- [x] Consistent styling with fixed title heights (h-16, line-clamp-2)
- [x] Data attributes added (data-category, data-game-id)

### Technical Skills Achieved:
- Tailwind Grid System, CSS Transforms, Absolute Positioning
- Flexbox Layouts, Responsive Design, CSS Transitions

---

## Task 2: Category Filter System - COMPLETED
**Goal:** Build interactive filter tabs to sort games by genre with smooth animations

### Phase 1: Data Attributes
- [x] 2.1 Add data-category attributes to all 4 cards
- [x] 2.2 Test data attributes in browser console

### Phase 2: Filter Tabs HTML
- [x] 2.3 Create filter container above game grid
- [x] 2.4 Build tab navigation with 4 buttons
- [x] 2.5 Style tabs with Tailwind (inactive: gray, active: purple)

### Phase 3: JavaScript Filter Logic
- [x] 2.6 Create filter.js file
- [x] 2.7 Build filterGames(category) function
- [x] 2.8 Add click event listeners to tabs
- [x] 2.9 Enhanced show/hide with display properties (flex/none)

### Phase 4: Enhanced Features
- [x] 2.10 Dynamic game count updates (updateCount, updateAllCounts functions)
- [x] 2.11 "No games found" state (skipped - not needed)
- [x] 2.12 Filter reset functionality (All Games button)

### Completed Features:
- [x] 4 filter buttons with dynamic counts
- [x] Smart filtering using display properties (cards group together)
- [x] Active button styling (purple for active, gray for inactive)
- [x] Counts update on page load and filter changes
- [x] Optimized HTML with uppercase categories

### Technical Skills Achieved:
- DOM Selection and Manipulation, Event Handling, Data Attributes
- Class Manipulation, Array Operations, Display Properties
- Function Creation, Template Literals, Conditional Logic

---

## Task 3: Search & Sort System - POSTPONED
**Goal:** Real-time search with sorting options combined with category filtering

**Status:** Postponed until after Task 4

### Features to Build:
- Search input with real-time filtering as you type
- Sort dropdown: Name (A-Z), Price (Low-High), Rating (High-Low)
- Debounce function for performance
- Combined search + category + sort filtering

---

## Task 4: Shopping Cart System - CURRENT TASK
**Goal:** Full cart functionality with add/remove, quantity, and total calculation

**Architecture:**
- main-page.html - home with game cards
- cart.html - cart page showing added products
- cart.js - handles cart logic for both pages
- localStorage - persists cart data between pages

### Phase 1: Create Product Database
- [ ] 4.1 Create products object in cart.js with all game data
  - id, name, price, image, category for each product
  - Structure: `products = { "1": {...}, "2": {...}, etc }`

### Phase 2: localStorage Cart Functions
- [ ] 4.2 Implement getCart() function
  - Read from localStorage
  - Parse JSON and return cart object
  - Return empty object if no cart exists
  
- [ ] 4.3 Implement addToCart(productId) function
  - Get current cart
  - If product exists, increment quantity
  - If new product, add with quantity: 1
  - Save to localStorage with JSON.stringify
  
- [ ] 4.4 Implement updateCart(productId, change) function
  - Get current cart
  - Update quantity (add change: +1 or -1)
  - Remove product if quantity reaches 0
  - Save to localStorage

### Phase 3: Add to Cart Button Logic (main-page.html)
- [ ] 4.5 Select all "Add to Cart" buttons
  - Use querySelectorAll with proper selector
  
- [ ] 4.6 Add click event listeners
  - Get parent card with closest('[data-game-id]')
  - Extract productId from dataset.gameId
  - Call addToCart(productId)
  - Navigate to cart.html with window.location.href

### Phase 4: Build cart.html Structure
- [ ] 4.7 Create HTML structure
  - Header with "Shopping Cart" title
  - Cart items container (div with id="cart-items")
  - Total price display (div with id="total-price")
  - Empty cart message container
  - Back to shop button/link
  
- [ ] 4.8 Include cart.js script
  - Add script tag with defer attribute

### Phase 5: Display Cart Items
- [ ] 4.9 Implement displayCart() function
  - Get cart from localStorage
  - Check if empty, show message
  - Loop through cart items
  - For each item: get product data from products object
  - Create HTML for each cart item (image, name, price, quantity, buttons)
  - Insert into cart-items container
  
- [ ] 4.10 Create cart item HTML structure
  - Product image
  - Product name and category
  - Price per unit
  - Quantity display
  - Minus (-) button with onclick
  - Plus (+) button with onclick
  - Remove button (optional)

### Phase 6: Update Quantity Buttons
- [ ] 4.11 Implement updateQuantity(productId, change) function
  - Call updateCart(productId, change)
  - Refresh display with displayCart()
  - Update total price
  
- [ ] 4.12 Wire up +/- buttons
  - Use onclick or addEventListener
  - Pass productId and +1 or -1

### Phase 7: Calculate Total Price
- [ ] 4.13 Implement calculateTotal() function
  - Get cart from localStorage
  - Loop through items
  - Multiply price * quantity for each
  - Sum all items
  - Display total with toFixed(2)
  
- [ ] 4.14 Call calculateTotal() after every update
  - After displayCart()
  - After updateQuantity()

### Phase 8: Initialize Cart Page
- [ ] 4.15 Add DOMContentLoaded listener in cart.js
  - Check if on cart.html page
  - Call displayCart() to show items
  - Call calculateTotal() to show total

### Phase 9: Testing & Polish
- [ ] 4.16 Test add to cart from main page
- [ ] 4.17 Test quantity increase/decrease
- [ ] 4.18 Test removal when quantity reaches 0
- [ ] 4.19 Test total price calculation
- [ ] 4.20 Test empty cart state
- [ ] 4.21 Test cart persistence (refresh page)
- [ ] 4.22 Style cart items with Tailwind
- [ ] 4.23 Add responsive design for mobile

### Technical Skills to Learn:
- localStorage API (setItem, getItem, removeItem)
- JSON.stringify and JSON.parse
- Window.location.href for navigation
- Creating dynamic HTML with template literals
- onclick vs addEventListener patterns
- Data persistence between pages
- Object manipulation in JavaScript

---

## Task 5: Game Details Modal
**Goal:** Rich popup with full game information and media

### Features to Build:
- Click card to open modal
- Full game details (title, description, price, screenshots)
- Previous/next navigation between games
- Close button and ESC key support
- Click outside to close
- Keyboard accessibility

---

## Task 6: Footer & Newsletter
**Goal:** Professional footer with links and email signup

### Features to Build:
- Multi-column footer layout
- Social media links
- Newsletter signup form with validation
- Legal links and copyright info

---

## Current Progress Summary

**Completed:**
- Task 1: Featured Games Card Grid
- Task 2: Category Filter System

**Current Task:**
- Task 4: Shopping Cart System (9 Phases, 23 Steps)

**Postponed:**
- Task 3: Search & Sort System (will complete after Task 4)

**JavaScript Concepts Mastered:**
- querySelector/querySelectorAll, addEventListener
- dataset properties, classList manipulation
- forEach loops, array operations
- Functions, template literals, conditionals
- Display property manipulation

**Next Concepts to Learn (Task 4):**
- localStorage API, JSON methods
- Page navigation, dynamic HTML generation
- Data persistence, object manipulation
  - Padding: `px-4 py-2`
  - Border radius: `rounded`
  - Hint: Use `bg-purple-500 hover:bg-purple-600 text-white`

---

### Phase 3: Responsive Design
**Objective:** Make it look good on all screen sizes

- [x] **3.1 Test on mobile (1 column)**
  - Open browser dev tools (F12)
  - Toggle device toolbar (Ctrl+Shift+M)
  - Check: cards stack vertically, readable text, touchable buttons

- [x] **3.2 Test on tablet (2 columns)**
  - Breakpoint: `sm:grid-cols-2` (640px+)
  - Check: cards fit side by side, images don't distort

- [x] **3.3 Test on desktop (3-4 columns)**
  - Breakpoint: `lg:grid-cols-3` (1024px+)
  - Optional: `xl:grid-cols-4` (1280px+)
  - Check: grid looks balanced, not too crowded

- [x] **3.4 Adjust spacing if needed**
  - Section padding on mobile vs desktop
  - Card gap on different screens
  - Font sizes: smaller on mobile, larger on desktop

---

### Phase 4: Hover Effects (CSS only, no JS yet)
**Objective:** Add smooth, professional animations on hover

- [x] **4.1 Card lift effect**
  - Hint: Use `transition` class on the card wrapper
  - Add `hover:-translate-y-2` (lifts card 8px up)
  - Duration: `duration-300` for smooth animation

- [x] **4.2 Shadow enhancement**
  - Start: `shadow-md`
  - Hover: `hover:shadow-2xl`
  - Hint: Combine with translate for depth effect

- [x] **4.3 Image zoom effect**
  - Add `transition` and `transform` to image
  - Use `group` pattern on card, `group-hover:scale-110` on image
  - Remember: parent needs `overflow-hidden`
  
  **Hint structure:**
  ```
  card-wrapper (add "group" class)
    └── image (add "group-hover:scale-110 transition duration-300")
  ```

- [x] **4.4 Button hover state**
  - Background color change
  - Optional: add slight scale `hover:scale-105`
  - Smooth transition: `transition duration-200`

---

### Phase 5: Advanced Features (Optional)
**Objective:** Polish with extra details

- [x] **5.1 Add a "Sale" badge**
  - Position: absolute top-right or top-left
  - Colors: red or orange background, white text
  - Shape: rounded badge or ribbon
  - Hint: Parent card needs `relative`, badge needs `absolute`

- [x] **5.2 Add game genre tags**
  - Below title, small colored pills
  - Examples: "Action", "RPG", "Multiplayer"
  - Hint: Use `inline-block`, `px-2 py-1`, `text-xs`, `rounded-full`

- [x] **5.3 Add rating stars visual**
  - Use star symbols: ★ (filled) and ☆ (empty)
  - Color: gold/yellow for filled stars
  - Hint: You can use multiple `<span>` tags with Unicode stars

- [x] **5.4 Fixed title heights for consistent card alignment**
  - Applied `h-16 overflow-hidden line-clamp-2` to all titles
  - Prevents long titles from breaking card symmetry

---

### Phase 6: Preparation for Next Task (JS Preview)
**Objective:** Set up data attributes for future filtering

- [x] **6.1 Add category data attributes**
  - On each card, add: `data-category="action"` or `"racing"`, `"rpg"`, etc.
  - This prepares for Task 2 (filtering)
  - No JS needed yet, just the attributes

- [x] **6.2 Add game ID data attributes**
  - Example: `data-game-id="1"`, `data-game-id="2"`, etc.
  - This prepares for Task 4 (modal)

- [x] **6.3 Test accessibility**
  - Tab through cards with keyboard
  - Check: button is focusable, has focus ring
  - Alt text on images

---

## ✅ **Task 1 COMPLETED - Summary of Achievements:**

### **What You Built:**
- ✅ **4 Professional Game Cards** with hover effects
- ✅ **Responsive Grid Layout** (1/2/3/4 columns)
- ✅ **Sales Badges**: "20% OFF", "NEW", "SALE", "HOT"
- ✅ **Genre Tags**: Action, Racing, Shooter (properly positioned)
- ✅ **Star Ratings**: ★★★★☆ visual indicators
- ✅ **Smooth Animations**: Card lift, image zoom, button hover
- ✅ **Consistent Styling**: Fixed heights, aligned content

### **Technical Skills Mastered:**
- ✅ **Tailwind Grid System**: responsive columns, gap management
- ✅ **CSS Transforms**: hover effects with translate/scale
- ✅ **Absolute Positioning**: sales badges overlay
- ✅ **Flexbox Layouts**: price/rating rows, content alignment
- ✅ **Responsive Design**: mobile-first approach
- ✅ **CSS Transitions**: smooth 300ms animations

---

## Task 2: Category Filter System 🎯 CURRENT TASK
**Goal:** Build interactive filter tabs to sort games by genre with smooth animations

### Phase 1: Add Data Attributes to Cards
**Objective:** Prepare cards for JavaScript filtering

- [x] **2.1 Add data-category attributes to all cards**
  - Card 1 (God of War): `data-category="action"`
  - Card 2 (Mario Kart): `data-category="racing"`
  - Card 3 (NFS): `data-category="racing"`
  - Card 4 (COD): `data-category="shooter"`

- [x] **2.2 Test data attributes in browser console**
  - Open DevTools → Console
  - Run: `document.querySelectorAll('[data-category]')`
  - Verify all 4 cards have the attribute

---

### Phase 2: Filter Tabs HTML Structure
**Objective:** Build the filter navigation above game grid

- [x] **2.3 Create filter container above game grid**
  - Position: between carousel and card grid
  - Container: `max-w-7xl mx-auto px-4 py-6`
  - Background: subtle or transparent

- [x] **2.4 Build tab navigation**
  ```html
  <div class="filter-tabs">
    <button data-filter="all">All Games (4)</button>
    <button data-filter="action">Action (1)</button>
    <button data-filter="racing">Racing (2)</button>
    <button data-filter="shooter">Shooter (1)</button>
  </div>
  ```

- [x] **2.5 Style the tabs with Tailwind**
  - Inactive: `bg-gray-200 text-gray-700`
  - Active: `bg-purple-500 text-white`
  - Hover: `hover:bg-gray-300`
  - Layout: `flex gap-2` or `grid grid-cols-4`
  - Responsive: stack on mobile

---

### Phase 3: JavaScript Filter Logic ✅ COMPLETED
**Objective:** Make tabs functional with smooth animations

- [x] **2.6 Create filter.js file**
  - Location: `/src/filter.js`
  - Include in HTML with defer: `<script src="/src/filter.js" defer>`

- [x] **2.7 Basic filtering function**
  - Created `filterGames(category)` function
  - Uses `querySelectorAll` to find all cards
  - Uses `forEach` to loop through cards
  - Fixed comparison bug: `===` instead of `=`

- [x] **2.8 Add click event listeners to tabs**
  - ✅ Selected filter buttons with `querySelectorAll('[data-filters]')`
  - ✅ Added `forEach` loop on buttons
  - ✅ Added `addEventListener('click', ...)` to each button
  - ✅ Get `button.dataset.filters` value
  - ✅ Call `filterGames()` with that value
  - ✅ Update active button styling (remove/add classes)

- [x] **2.9 Enhanced show/hide with display properties** 🎯 IMPROVED!
  - ✅ Using `display: 'flex'` to show cards
  - ✅ Using `display: 'none'` to hide cards completely
  - ✅ Cards now group together without empty spaces
  - ✅ Better UX than opacity method
  - ✅ Grid reflows automatically when cards are hidden

---

## ✅ **Phase 3 COMPLETED - Key Achievement:**
**Advanced Filter System:** Cards group together when filtered (no empty spaces) using display properties instead of opacity. Active tab styling works perfectly. All 4 filter categories functional.

---


### Phase 4: Enhanced Filter Features ✅ COMPLETED
**Objective:** Polish the filter system

- [x] **2.10 Update game counts in tab labels** ✅
  - ✅ Created `updateCount(cat)` function to count cards per category
  - ✅ Created `updateAllCounts()` function to update all buttons at once
  - ✅ Called on page load to show correct counts
  - ✅ Updates dynamically: "Action (1)", "Racing (2)", "Shooter (1)", "All Games (4)"
  - ✅ Smart optimization: Changed HTML categories to uppercase (Action, Racing, Shooter)

- [x] **2.11 Add "No games found" state** ✅ (Not needed currently)
  - Current setup has at least 1 game per category
  - Can be added later if categories with 0 games are added

- [x] **2.12 Add filter reset functionality** ✅
  - "All Games" button already works as reset
  - Shows all 4 cards when clicked
  - Resets active button styling correctly

---

### Phase 5: Advanced Filter Options
**Objective:** Add professional touches

- [ ] **2.13 Add price range filters (optional)**
  - Buttons: "Under $30", "$30-$50", "Over $50"
  - Can combine with category filters
  - More complex JavaScript logic

- [ ] **2.14 Add smooth grid reflow**
  - When cards hide/show, remaining cards shift smoothly
  - Use CSS Grid with transitions
  - Maintain grid layout integrity

- [ ] **2.15 Add active filter indicator**
  - Underline or highlight active tab
  - Smooth transition when switching
  - Visual feedback for user

---

## JavaScript Concepts You'll Learn in Task 2

### **DOM Manipulation**
- `querySelector` / `querySelectorAll`
- `addEventListener` on multiple elements
- `dataset` property for data attributes
- `classList.add/remove/toggle`

### **Array Methods**
- `forEach()` for looping through elements
- `filter()` for counting categories
- Basic array operations

### **Event Handling**
- Click events on buttons
- Event delegation (optional)
- Preventing default behaviors

### **CSS + JS Animation**
- Triggering CSS transitions with JavaScript
- Managing multiple classes
- Timing animations properly

---

## Hints for Common Issues

### **Problem: Filters don't work**
- Check data attributes are spelled correctly
- Verify JavaScript file is loaded
- Use `console.log()` to debug

### **Problem: Animations are jerky**
- Add `transition` class to cards
- Use `opacity` instead of `display` for smoother effects
- Don't animate too many properties at once

### **Problem: Grid layout breaks when filtering**
- Keep cards in DOM, just hide them
- Use `opacity: 0` + `pointer-events: none`
- Or use CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(...))`

---

## Testing Checklist for Task 2

- [x] All tabs show correct game count
- [x] Clicking "All Games" shows all 4 cards
- [x] Clicking "Action" shows only God of War card
- [x] Clicking "Racing" shows only Mario Kart + NFS cards
- [x] Clicking "Shooter" shows only COD card
- [x] Active tab has different styling
- [x] Animations are smooth (300ms)
- [x] Works on mobile and desktop
- [x] No console errors in DevTools
- [x] Cards group together without empty spaces (display method)
- [x] Counts update dynamically on page load

---

## ✅ **Task 2 COMPLETED - Summary of Achievements:**

### **What You Built:**
- ✅ **4 Filter Buttons** with dynamic counts
- ✅ **Smart Filtering System** using display properties
- ✅ **Dynamic Count Updates** on page load and filter changes
- ✅ **Active Button Styling** (purple for active, gray for inactive)
- ✅ **Card Grouping** - no empty spaces when filtered
- ✅ **Optimized HTML** - uppercase categories for direct display

### **Technical Skills Mastered:**
- ✅ **DOM Selection**: querySelectorAll, querySelector
- ✅ **Event Handling**: addEventListener on multiple elements
- ✅ **Data Attributes**: dataset.category, dataset.filters
- ✅ **Class Manipulation**: classList.add/remove
- ✅ **Array Operations**: forEach, push, includes
- ✅ **Display Properties**: flex vs none for better UX
- ✅ **Function Creation**: updateCount(), updateAllCounts(), filterGames()
- ✅ **Template Literals**: Dynamic button text with counts
- ✅ **Conditional Logic**: if/else for "all" vs specific categories

---

## Task 2: Category Filter System ✅ FULLY COMPLETED
**Goal:** Build interactive filter tabs to sort games by genre with smooth animations

**All 5 Phases Complete:** Data attributes → HTML structure → JavaScript logic → Enhanced features → Testing ✅
- [ ] Active tab has different styling
- [ ] Animations are smooth (300ms)
- [ ] Works on mobile and desktop
- [ ] No console errors in DevTools

---

---

## Future Tasks Overview

### Task 3(Later): Search & Sort System 📝 NEXT
**Goal:** Real-time search with sorting options and smooth filtering
- Live search as you type
- Sort by name, price, rating
- Combined with category filtering
- Debounce function for performance

### Task 4: Shopping Cart System 🛒
**Goal:** Full cart functionality with add/remove, quantity, and total calculation
- Add to cart from game cards
- Cart sidebar with quantities
- localStorage persistence
- Total price calculation

### Task 5: Game Details Modal 🎮
**Goal:** Rich popup with full game information and media
- Click card → open modal
- Full game details, screenshots
- Previous/next navigation
- Keyboard accessibility

### Task 6: Footer & Newsletter 📧

---

## Notes & Resources

### Key Tailwind Classes
- Layout: grid, flex, items-center, justify-between, gap-*
- Styling: bg-*, text-*, border, rounded-*, shadow-*
- Effects: transition, duration-*, hover:scale-*, hover:-translate-y-*
- Responsive: sm:*, md:*, lg:*, xl:*

### JavaScript Patterns Used
- Event listeners: addEventListener('click', callback)
- DOM selection: querySelector, querySelectorAll
- Data attributes: element.dataset.attributeName
- Class manipulation: classList.add/remove
- Array methods: forEach, push, includes
- Template literals: `${variable}`

### Testing Checklist
- [ ] Works on mobile (320px), tablet (768px), desktop (1280px+)
- [ ] Hover effects are smooth
- [ ] No console errors
- [ ] Images not distorted
- [ ] Buttons are clickable
3. **Forgetting responsive classes** = looks good on desktop, terrible on mobile
4. **Too many transitions** = page feels slow and laggy
5. **Inconsistent spacing** = cards look unprofessional
6. **Missing `transition` class** = hover effects jump instead of animate

---

## When to Ask for Help

✅ **Good times to ask:**
- Tried for 15+ minutes and still stuck
- Code works but looks wrong (show me what you have)
- Want to verify your approach before building
- Need clarification on a concept

❌ **Try first before asking:**
- Haven't looked at Tailwind docs yet
- Haven't tested in browser
- Asking for complete code without attempting

---

## Next Steps After Completion

Once Task 1 is done, you'll have:
- ✅ Solid understanding of Tailwind Grid
- ✅ Professional hover effects
- ✅ Responsive design skills
- ✅ Foundation for Task 2 (Filter Tabs with JS)

**Task 2 Preview:** You'll add clickable tabs above this grid and write JavaScript to show/hide cards based on category. That's when your `data-category` attributes will be useful!

---

**Ready to start? Begin with Phase 1.1 and work your way through. Mark each checkbox as you complete it. Good luck! 🚀**
