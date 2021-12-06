import React from 'react';
import {useState, useEffect} from "react";
import './App.css';


//nie sporawdzam czy plik istnieje
function App() {
	const [quotes, setQuotes] = useState([]);
	useEffect(() => {
		fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/')
		.then((res) => res.json())
		.then(data => setQuotes(data))
		.catch(err => console.log(err))
	},[]);
	
//wylosowanie i wyswietlenie cytatu
	function showQuote() {
		let randomQuotes = Math.floor(Math.random() * quotes.length);
		console.log(randomQuotes);
		console.log(quotes[randomQuotes]);
		
		let autor = quotes[randomQuotes].author;
		let quote = quotes[randomQuotes].quote;		

		document.getElementById('quote').textContent = quote;
		document.getElementById('author').textContent = autor;
	}

	//wyswietl poprzednia
	function showPrevious(){
		
	}
	
  return (
    <main>
			<div>
      <h1>Random Quotes</h1>
      
      <div class="one" >
        
        <div id="quote">
          "Miejsce na cytat"
        </div>
        
      <div class="author" id="author">
          "Autor"
        </div>
      </div>
    <div>
			<div class="button" >
        <button onClick={showPrevious} class="button" type="button"> Back</button> 
       </div>

			<div class="button" >
        <button onClick={showQuote} class="button" type="button"> Next  </button> 			
       </div>

		</div>
    </div>

    </main>
  );
}

export default App;