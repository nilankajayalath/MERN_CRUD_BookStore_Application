import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function Book() {
    const baseUrl = "http://localhost:8000/api/books";

    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState([true]);
    const [selectedCategory,setSelectedCategory] = useState("");
    

    useEffect(()=>{
        const fetchData = async()=>{
            try{

            let url = baseUrl;
            if(selectedCategory){
                url += `?category = ${selectedCategory}`
            }


                const response = await fetch(url);

                if(!response.ok){
                  
                    throw new Error("Failed to fetch data.");
                }

                const jsonData = await response.json();
               
                setData(jsonData);
                setIsLoading(false);

            }catch (error){
               
                setIsLoading(false);
            }
        };
        fetchData();
    },[selectedCategory]);

  return (
    <div>
      <h1 align="center">BookStore</h1>
      <p align="center">Your gateway to explore, add, and manage your favorite books.</p>

      <Link to="/createbook">+ Add New Book</Link>

      <h2>BookStore Collection</h2>
  
       <div className="filters">
        <label>Categories :</label>

       
        <select onChange={(e)=> setSelectedCategory(e.target.value)}>

            <option value="">All</option>
               

        </select>
       </div>


    {isLoading ? (
        <p>Loading...</p>
    ):(

      <ul className="books">
        {data.map((item)=>(
            <li key={item._id}>
                <Link to={`/books/${item.slug}`}>
                  <img src={`http://localhost:8000/uploads/${item.thumbnail}`} alt={item.title} />
                  <h3>{item.title}</h3>
                </Link>
            </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default Book
