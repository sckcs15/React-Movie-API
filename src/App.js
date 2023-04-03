import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies =async ()=>{
    const data = await (await fetch("")).json();
    
  }
  useEffect(()=>{
  });
 return(
  <div>

  </div>
 )
}

export default App;
