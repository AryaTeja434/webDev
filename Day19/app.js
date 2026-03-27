import movies from "./movies.js";

// mapping
const titles=movies.map(movie=>movie.title)
console.log(titles)

const titlesIMDB=movies.map(movie=>({movie:movie.title,rating:movie.imdbRating}))
console.log(titlesIMDB)

// filtering
const thrillerAfter2000 = movies.filter(movie=> movie.genre=="Thriller" && movie.year>=2000)
console.log(thrillerAfter2000)

const dramaAbove8_5 = movies.filter(movie=> movie.genre=="Drama" && movie.imdbRating>=8.5)
console.log(dramaAbove8_5)

const actionLeonardo = movies.filter(movie=> movie.genre=="Action" && movie.actors.includes("Leonardo DiCaprio"))
console.log(actionLeonardo)

// chaining
const dramaPitt = movies.filter(movie=> movie.genre=="Drama").filter(movie=>movie.actors.includes("Brad Pitt")).map(movie=>movie.title)
console.log(dramaPitt)

const dramaTim = movies.filter(movie=> movie.genre=="Drama").filter(movie=>movie.actors.includes("Tim Robbins")).map(movie=>movie.title)
console.log(dramaTim)

const titlesFor=movies.forEach(movie=> 
    {return movie.title})
console.log(titlesFor)