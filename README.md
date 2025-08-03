# Multi-Theme Switcher App

A responsive React + TypeScript + Redux + Tailwind CSS application with **three distinct themes** that change colors, fonts, layout, and structure.  
The app demonstrates theme persistence, responsive design, sidebar layouts, and dynamic styling.

## Features

### **1. Multi-Theme Support**

- **Theme 1 (Default):** Minimalist light background, sans-serif font.
- **Theme 2:** Dark mode, sidebar layout, serif font.
- **Theme 3:** Colorful, playful layout with Google "Pacifico" font.

### **2. Layout**

- **Header**: Fixed top header with app name, navigation, and theme switcher dropdown.
- **Sidebar**: Appears in Theme 2 (dark mode), collapsible on mobile.
- **Main Content**: Displays product list in a responsive table.

### **3. Product List**

- Fetches data from **[Fake Store API](https://fakestoreapi.com/products)**.
- Displays in a table with theme-based styling for headers, borders, hover effects, and text.

### **4. Responsive Design**

- Works on mobile, tablet, and desktop.
- Mobile-friendly navigation.
- Sidebar toggle on Theme 2 for mobile.

### **5. State Management**

- **Redux Toolkit** for managing theme and product data.
- Theme preference persisted in `localStorage`.

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Redux Toolkit**
- **React Router v6**
- **Tailwind CSS**
- **Fake Store API**

## Getting Started

### **1. Clone the Repository**

```bash
git clone https://github.com/pranshuchhabra/theme_switcher.git
cd theme_switcher
```

### **2. Install Dependencies**

npm install

### **3. Start Development Server**

npm run dev

### **4. Build for Production**

npm run build
