# datapod-for-react-2023

This is an early version of my new Datapod-for-React framework, currently a React site created with Vite and with the following features: Sass, React Router, qtools, Jest testing, a CLI page-creator tool, and TypeScript working backend and frontend.

![grafik](https://user-images.githubusercontent.com/446574/200960596-bdc5bd34-ca8c-4c03-9c0f-e67e9bf7d111.png)

## purpose

- a starter site to build React sites with TypeScript on the frontend and backend

## backend

- TypeScript
- ES6 modules (`import` instead of `require`)
- CLI with page component creator: `npm run cp`
- (currently no API)

## frontend

- React site made with Vite
- TypeScript
- ES6 modules
- Sass
- React Router (v6)
- qtools 
  - useful functions that can be used throughout the application
  - accessible from frontend and backend when these are in the same project
- Jest testing for qtools, site will not build without passing all tests

## how to install

- go to projects directory
- `git clone git@github.com:edwardtanguay/datapod-react-2023.git name-of-your-site`
- `cd name-of-your-site`
- `rm -rf .git` - removes the Git repository 
- `git init -b main` - creates your own Git Repository
- `code .` - open project in VSCode
- open VSCode terminal
- `npm i`
- `npm run dev`
- click on provided localhost URL
