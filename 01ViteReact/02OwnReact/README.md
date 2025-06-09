# 🛠️ CustomRender – Mini Project #2

A lightweight experiment that mimics how React turns a plain JavaScript object into a real DOM node.  
You’ll see two approaches:


1. **Version 1 (hard-coded attributes)** – quick but brittle.  
2. **Version 2 (loop-based)** – scalable; loops through `props` so any number of attributes work.
3. 

This is Project 2 in my **“React JS Learning Series – with Minor Projects”** journey.

---


## ✨ What This Project Teaches

- The anatomy of a *very* small “virtual DOM” object:
  ```js
  {
    type: 'a',
    props: { href: 'https://google.com', target: '_blank' },
    Children: 'click me to visit google'
  }


Creating DOM nodes with document.createElement.

Injecting text with innerHTML.

Setting multiple attributes safely using a for…in loop.

Mounting the element inside a chosen container (#root).


🗂️ Project Structure
src/
├─ index.html         # Root HTML with <div id="root"></div>
└─ customReact.js            # The CustomRender code 


🚀 Getting Started
Clone the repo

bash
Copy
Edit

Git Permalink:

git clone https://github.com/vikrant-1912/React-Series/tree/431762f40c39b70cfcf3119b9337ed2bd828fcf6/01ViteReact/02OwnReact
cd custom-render-mini
Open index.html in your browser (no build tools needed).


💡 My PRO-Tip: If you prefer a dev server with auto-reload, run something like
npx live-server in the project folder.


📚 Next Steps -

Extend this renderer to handle nested children (arrays).

Add support for event listeners (e.g., onClick).

Compare performance against React’s real renderer in the DevTools.


## 📬 Reach Out to Me

1. [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) GitHub](https://github.com/vikrant-1912)

   
3. [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) LinkedIn](https://www.linkedin.com/in/vikrant1912)

    
5. [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white) Instagram](https://www.instagram.com/vikrant_7017)

 
6. [![Email](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white) Gmail](mailto:vikrantkhatana15@gmail.com)

   


Made with ☕ & curiosity by Vikrant Khatana
