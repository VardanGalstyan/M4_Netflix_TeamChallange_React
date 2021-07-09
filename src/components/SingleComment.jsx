import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
// import { RiDeleteBin6Line } from "react-icons/ri";




const deleteComment = async (imdbID) => {
 try {
     let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + imdbID,{
         method: 'DELETE',
         headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjU3NDcwOTEsImV4cCI6MTYyNjk1NjY5MX0.G4kyEjCqqI1Abl2tR30awLtw-cJUHgojAJKckF9Qq34"
        }
     })
     if(response.ok){
         alert('Comment is Deleted!')
     } else (
         alert('Something went wrong!')
     )
     
 } catch (error) {

 }
}

export default function SingleComment(props) {


    return (
        <div>
            <ListGroupItem className='d-flex justify-content-between'>
                <p>{props.comment.comment}</p>
                <Button 
                    variant='danger' 
                    className='ml-1' 
                    onClick={() => deleteComment(props.comment._id)}
                >X</Button>
            </ListGroupItem>

        </div>
    )
}
