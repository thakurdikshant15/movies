import React from 'react'

function Genre({genres,cGenre,setcGenre}) {
  return (
    <div>
      <ul className="list-group">
            {
             genres.map((singleGenre)=>{
              return(

                <li className={cGenre==singleGenre.name ? "list-group-item active": "list-group-item"}  key={singleGenre._id} onClick={()=>{setcGenre(singleGenre.name)}}>{singleGenre.name}</li>
              )

             })  
            }
            

          </ul>
    </div>
  )
}

export default Genre
