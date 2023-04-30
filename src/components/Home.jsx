import React, { useEffect, useState } from 'react'
import Row from './Row.jsx'
import axios from 'axios'

export default function Home() {
    const [a1,setA1]=useState([])
    const [a2,setA2]=useState([])
    const [a3,setA3]=useState([])
    const [a4,setA4]=useState([])
    useEffect(() => {
        const tag=["popular","top_rated","now_playing","upcoming"]
        const fetchData =async () =>{            
            const data1= await axios.get(`https://api.themoviedb.org/3/movie/${tag[0]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US&page=1`)
            const data2= await axios.get(`https://api.themoviedb.org/3/movie/${tag[1]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US&page=1`)
            const data3= await axios.get(`https://api.themoviedb.org/3/movie/${tag[2]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US&page=1`)
            const data4= await axios.get(`https://api.themoviedb.org/3/movie/${tag[3]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US&page=1`)
            // console.log(data1.data.results,data2.data.results,data3.data.results,data4.data.results);
            setA1(data1.data.results)
            setA2(data2.data.results)
            setA3(data3.data.results)
            setA4(data4.data.results)
        }
        fetchData();
    },[])    
  return (
    <div>
        <div id='banner'>          
            <img src={`https://image.tmdb.org/t/p/w500${a1[2]?.backdrop_path}`} alt="" />                        
                                               
        </div>

        <Row title={"Popular"} tag={"popular"} arr={a1}/>
        <Row title={"Top Rated"} tag={"top_rated" } arr={a2}/>
        <Row title={"Now Playing"} tag={"now_playing"} arr={a3}/>
        <Row title={"Upcoming"} tag={"upcoming"} arr={a4}/>
    </div>
  )
}
