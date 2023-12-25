import React, { Component } from "react";
import './App.css';
import Card from './components/Card';
import axios from 'axios';
import logo2 from './redditlogo.png'

class App extends Component{
  constructor(){
    super();
    this.state = {
        comments: [],
        subreddits: [],
        api:[],
       
    }
}

componentDidMount() {
  
    console.log('rendered')

    axios.get("https://www.reddit.com/search.json?q=cake%20recipes")
    .then((res) => {

       this.setState({comments: res.data.data.children}); 
       this.setState({api: res.data.data.children}); 
   });

  }

  render(){

     const search = () =>{

      let searchValue = document.getElementById('search').value

        if(searchValue){
      const searchArr = this.state.comments.filter(comment => comment.data.title.includes(document.getElementById('search').value));

      console.log(document.getElementById('search').value)
      this.setState({comments: searchArr}); 
        }else{
          this.setState({comments: this.state.api}); 
        }

    }

  return (
    <div className="main-container">
      <header className="header">
           <div className="logo">
            <img src={logo2} alt="reddit logo"/>
           </div>
           <div className="search">
            <input type="search" name="search" id="search" placeholder="Search..."/>
            <i className="bi bi-search" onClick={search}></i>
           </div>
            <span className="header-buttons">
              <input className="button" type="button" value="Login" />
              <input className="button" type="button" value="Register" />
            </span>
      </header>
      <div className="sub-container">

   

        <div className="content">

        {this.state.comments.map((comment,id)=>{
       return(
        <div className="content-card" key={comment.data.id}>
       <Card commentby={comment.data.author} 
             created={comment.data.created} 
             title={comment.data.title} 
             comment={comment.comment} 
             img={comment.data.url_overridden_by_dest} 
             numcomments={comment.data.num_comments} 
             votes={comment.data.ups}
             subreddit={comment.data.subreddit}/>
       {/* <hr /> */}
       </div>
       )
       })}
  
        </div>
       
        <div className="subreddits">
          <h1>Subreddits</h1> 

          {this.state.api.map((comment,id)=>{
       return(
        <div className="subreddit" key={comment.data.id}>
       <p>{comment.data.subreddit}</p>
       {/* <hr /> */}
       </div>
       )
       })}
        </div>

      </div>

    </div>
  );
}
}

export default App;










