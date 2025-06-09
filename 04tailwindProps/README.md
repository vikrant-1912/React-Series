# ☕ Coffee Card Component     Mini-Project  #4 

A sleek and reusable React component showcasing a coffee card, built with **React** and styled using **Tailwind CSS**. Demonstrates the power of props for dynamic content!

---

## 🚀 Live Demo

*(will be added soon )*

---

## 🛠️ Technologies Used

- React.js — Functional components & props  
- Tailwind CSS — Utility-first styling  
- JavaScript ES6 — Modern syntax and defaults

---

## 📋 Component Overview

- **Card** component accepts:  
  - `username` (string): Name of the user or coffee lover  
  - `coffeename` (string, optional): Name of the coffee (default: "Milk Latte")  
- Displays a beautifully styled card with an image, username, coffee name, and a coffee-themed tagline.

---

## 🖼️ Screenshot

![Coffee Card](https://images.pexels.com/photos/30751327/pexels-photo-30751327/free-photo-of-cozy-coffee-cups-on-a-wooden-tray-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

---

💡 What I Learned
How to pass and use props in React functional components

Setting default prop values in function parameters

Styling components effectively with Tailwind CSS classes



📃 License
This project is licensed under the MIT License.


## 📬 Reach Out to Me

1. [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) GitHub](https://github.com/vikrant-1912)

   
2. [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) LinkedIn](https://www.linkedin.com/in/vikrant1912)

   
3. [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white) Instagram](https://www.instagram.com/vikrant_7017)

 
4. [![Email](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white) Gmail](mailto:vikrantkhatana15@gmail.com)
   


Made with ☕ and ❤️ by Vikrant Khatana


Git PermaLink :

https://github.com/vikrant-1912/React-Series/tree/5c224cec7529b727fb9fe00aef7a83c2ab19fc18/04tailwindProps


## ⚙️ Usage

Import and use the `Card` component in your React app:


```jsx
import Card from './Card';

function App() {
  return (
    <div>
      <Card username="Vikrant" coffeename="Mocha Frappe" />
      <Card username="Shilpy" />
    </div>
  );
}

