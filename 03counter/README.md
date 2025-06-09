# 🔢 React Counter Mini Project   #3

A simple and effective **React** counter app designed to build a strong foundation in React Hooks, especially `useState`. This project helps understand how state works in functional components and how React re-renders the UI based on state changes.

---

## 🧠 Why Hooks & `useState`?

- React Hooks allow functional components to manage state without needing classes.  
- `useState` returns an array: the current state value and a setter function to update it.  
- Updating state via setter triggers React to re-render the component with new data.  
- This project demonstrates these core concepts with a basic counter initialized at 15.

---

## ⚙️ Features

- Increment counter value with **Add value** button  
- Decrement counter value with **Remove value** button  
- Real-time UI updates on button clicks

---
Git Permalink:

https://github.com/vikrant-1912/React-Series/tree/f61f149caa68277d009bc23030889f1d124cb730/03counter


## 📬 Connect With Me

1. [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) GitHub](https://github.com/vikrant-1912)
   

3. [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) LinkedIn](https://www.linkedin.com/in/vikrant1912)
   
  
5. [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white) Instagram](https://www.instagram.com/vikrant_7017)

     
7. [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white) Email](mailto:vikrantkhatana15@gmail.com)  




## 💻 Code Highlights

```jsx
const [counter, setCounter] = useState(15);

const addValue = () => setCounter(counter + 1);
const removeValue = () => setCounter(counter - 1);

