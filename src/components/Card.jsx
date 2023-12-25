import React from 'react'
import './card.css'

function card(props) {

    const formatDate = ()=>{

        let prop = new Date(props.created)

        return prop.toDateString()
    }

  return (
    <div className='card'>
        <div className="card-header">
            <span className="comment-info">
            <span>{props.commentby}</span>   
            <span className='dformat'>{formatDate()}</span>
            
            </span>
        </div>

        <div className="card-body">
            <h3>{props.title}</h3>
            {
                props.img === "" ? "" : <img src={props.img} alt={""}/>
            }
           {/* <img src={props.img ==="" ? "" : props.img} alt={"dffgfsd sdfsdf dsfsdf"}/> */}
            <p>{props.comment}</p>
        </div>




        <div className="card-footer">
       
            <div className="vote">
                <span className="material-symbols-outlined">shift</span>
                <span>{props.votes}</span>
                <span className="material-symbols-outlined rotate">shift</span>
            </div>

            <div className="vote">
                <span className="material-symbols-outlined">chat_bubble</span>{props.numcomments}
            </div>

            <div className="vote">
                <span className="material-symbols-outlined">upload</span>
                
            </div>
            
        </div>
       
        {props.subreddit}
        
    </div>
  )
}

export default card