# Current Most Popular Movies App

Popular movie web app updated weekly with the latest movie titles. Built with the TMDb API, HTML, Tailwind and React.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install packages required to build this project.

```bash
npm install
```

## Motivation

I wanted practice using `useState`, `props` and ternary expressions to create instant filtering as well as using `fetch` and `map` to display data in an appealing and useful way. I also coded a `for` loop to iterate over the TMDb API pagination (limited to 20 movies per page) to pull the top 100 results from TMDb.

## Screenshot

![screenshot](/public/screenshot.png)

## Features

The database is an array of local objects for both the resources and the categories. I have also experimented with [framer motion](https://www.framer.com/motion/) to add some subtle animation to the app.

## Credit

Thank you [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) for providing such a great open source API. Try building your own project by starting [here](https://developers.themoviedb.org/3/getting-started/introduction).
