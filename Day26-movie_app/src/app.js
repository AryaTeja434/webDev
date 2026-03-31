

const url="https://www.omdbapi.com/?i=tt3896198&apikey=e9e18139&t=";

let image=document.querySelector("img")
let title= document.querySelector("#title")
let genre= document.querySelector("#genre")
let plot= document.querySelector("#plot")
let actors= document.querySelector("#actors")
let director= document.querySelector("#director")
let writer= document.querySelector("#writer")
let year= document.querySelector("#year")
let awards= document.querySelector("#awards")
let imdb= document.querySelector("#imdb")
let movieDiv=document.querySelector(".movie")
let errorDiv=document.querySelector(".error")

function searchMovie(){
    let movieName=document.querySelector("input").value;
    let api=url+movieName
    fetch(api).then(res=>res.json()).then(data=>{

        if(data.Error){
            movieDiv.classList.add("hidden")
            errorDiv.innerText="Movie not found"
        }else{
            errorDiv.innerText=""
            movieDiv.classList.remove("hidden")
            title.innerText=data.Title
            genre.innerText=data.Genre
            plot.innerText=data.Plot
            actors.innerText=data.Actors
            director.innerText=data.Director
            writer.innerText=data.Writer
            year.innerText=data.Year +" " +data.Language
            awards.innerText=data.Awards
            imdb.innerText=data.imdbRating
            image.src=data.Poster
        }
        
    })
}
