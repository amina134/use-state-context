import './App.css';
import React, { useState } from 'react';




const FormInput=({movies,setMovies})=> {
    
    
    const [movie,setMovie]=useState({
        title:'',
        description:'',
        posterURL:'',
        rating:''
    })


    const handleChange=(e)=>{
        setMovie((movie)=>({...movie,
            [e.target.name]:e.target.value
        }))
    }


     
   
    return (
        <div className='inputForm'>
            <div className="input-wrapper">
                <label className='inputLabel'>Title</label>
                <input  name ="title" value={movie.title}  onChange={handleChange} className='inputField' id="titleId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Description</label>
                <input  name ="description" value={movie.description}   onChange={handleChange} className='inputField' id="descriptionId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>PosterURL</label>
                <input  name ="posterURL" value={movie.posterURL}    onChange={handleChange}className='inputField' id="posterURLId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Rating</label>
                <input  name ="rating" value={movie.rating} onChange={handleChange}className='inputField' id="ratingId" placeholder=''></input>
            </div>
            <button className='addButton' onClick={() => {setMovies([...movies, movie]);
            setMovie({ title:'',
                description:'',
                posterURL:'',
                rating:''})

            }}> ADD </button>
        </div>);
       
    
}


export default FormInput;