import React from 'react'
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <h1 align="center">Welcome to BookStore</h1>
      <p align="center">Your gateway to explore, add, and manage your favorite books.</p>

      <Link to="/books" align="center">View Books</Link>
      <p>The View Books feature in the Bookstore Application allows users to explore a comprehensive collection of books.
         With a user-friendly interface and search capabilities, it provides the following:</p>
         <br/>
         <p><b>* Book Details:</b> Each book entry includes a thumbnail, title, author, and additional details like description and publication year.</p>
         <p><b>* Quick Navigation:</b> Click on any book to view its full details or proceed to manage it directly.</p>
    </div>
  )
}

export default home;
