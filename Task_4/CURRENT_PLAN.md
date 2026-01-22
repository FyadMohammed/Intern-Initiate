# Current Plan

**Instructions** 
- This file contains all the current plans
- The phases will be included and edited here
- LEARNING_PLAN.md is the bigger picture and contains overall progress
- Completed Tasks will be copied and pasted by me on the Learning plan
- Before the Phases An overview of the tasks will be added 
- A sample copy pasted Task and phase has added below


## Task 4: Shopping Cart System - CURRENT TASK
**Goal:** Full cart functionality with add/remove, quantity, and total calculation

**Architecture:**
- main-page.html - home with game cards
- cart.html - cart page showing added products
- cart.js - handles cart logic for both pages
- localStorage - persists cart data between pages

### Phase 1: Create Product Database
- [x] 4.1 Create products object in cart.js with all game data
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

**Next Concepts to Learn (Task 4):**
- localStorage API, JSON methods
- Page navigation, dynamic HTML generation
- Data persistence, object manipulation
  - Padding: `px-4 py-2`
  - Border radius: `rounded`
  - Hint: Use `bg-purple-500 hover:bg-purple-600 text-white`

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

