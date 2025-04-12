import React from 'react'

type top_movies = {
  rank:number,
  movie_name:string
}

const genre_top_movies: Record<string,top_movies[]> = {
  action: [
    { rank: 1, movie_name: "Mission Impossible" },
    { rank: 2, movie_name: "Die Hard" }
  ],
  comedy: [
    {rank:1, movie_name:"Groundhog Day"},
    { rank: 2, movie_name: "Superbad" }
]


}

export default function Home() {
  return (
    <div>
      <h1>Top Movies by Genre</h1>
      <br/>      
      {Object.entries(genre_top_movies).map(([genre,top_movies])=>(        
        <div key={genre}>
          {genre}
          <ol>
            {
              top_movies.map((movie,index)=>(
                <li key={index}>#{movie.rank} {movie.movie_name}:
                <input 
                  type="text" 
                  placeholder="Add a comment" 
                  className="border px-2"
                />
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Submit
                </button>
                </li>
              )             
            )
            }
            </ol>
          <br/>
        </div>        
      )
      )
      }        
    </div>
    
  )
}
