## Macro Tracking App Web App (beginnings)

Usage limit reached for Claude Code, but this code includes the beginnings of a MacroTrackerApp project

Course Guide: https://amdocsglobal.udemy.com/course/the-complete-ai-coding-course-2025-cursor-ai-v0-vercel/learn/lecture/49157233#overview

<img width="615" height="566" alt="Screen Shot 2025-08-04 at 2 17 41 PM" src="https://github.com/user-attachments/assets/8ccbba4c-f900-46ae-b76b-ddf83530609c" />

<img width="605" height="531" alt="Screen Shot 2025-08-04 at 2 17 45 PM" src="https://github.com/user-attachments/assets/d1b145d1-f08d-4808-a91d-c8577a5564b5" />

### Claude Code Prompt:
"Create a macro tracking app. It will have users that can log their foods and achieve macro goals for the day.

I want to use react for the frontend and firebase for the backend. I will also use replit as my IDE.

Also provide a simple file structure for me to start the project. I have included my existing file structure below for reference:

|-index.html
|-package.json
|-package-lock.json
|-public
| |-favicon.svg
|-README.md
|-src
| |-App.css
| |-App.jsx
| |-index.jsx
|-tsconfig.json
|-vite.config.js"

### Command to View File Structure: 
find . -maxdepth 2 -not -path '*/.*' -not -path '*/node_modules*' | sort | sed -e "s/[^\/]*\// /g" -e "s/\([^\ ]\)\/-\1/\1/"

## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)
