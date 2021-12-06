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

		let autor ;
		let quote ;
		let tempRandomQuotes = []; //zapamietanie numeru wylosowanego cytatu 
		let indexTab = 0;
//wylosowanie i wyswietlenie cytatu
	function showQuote() {
		let randomQuotes = Math.floor(Math.random() * (quotes.length+1));
		
		tempRandomQuotes.push(randomQuotes); // zapamietanie ktory cytat wylosowany

		autor = quotes[randomQuotes].author;
		quote = quotes[randomQuotes].quote;		

		document.getElementById('quote').textContent = quote;
		document.getElementById('author').textContent = autor;

		indexTab = tempRandomQuotes.length-1;
	}

	//wyswietl poprzedniego cytatu nie wiem czy to nalepsza metoda mozna by ja refaktoryzowac 
	function showPrevious(){
			
		if(tempRandomQuotes.length == []){
			document.getElementById('quote').textContent = "Miejsce na cytat";
			document.getElementById('author').textContent = "Autor";
			console.log("test 1" );

			}	else { 
				//odczytanie zawartosci indexTab tablicy tempRandomQuotes
				(indexTab <= 0) ? (indexTab = 0) : (indexTab -= 1);

				let j = tempRandomQuotes[indexTab];
				 
				 let tmpAutor = quotes[j].author;
				 let tmpQuote = quotes[j].quote;	

				 document.getElementById('quote').textContent = tmpQuote;
				 document.getElementById('author').textContent = tmpAutor;
			}
	}
  return (
    <main>
			<div>
      <h1>Random Quotes</h1>
      
      <div className="one" >
        
        <div id="quote">
          Miejsce na cytat
        </div>
        
      <div className="author" id="author">
          Autor
        </div>
      </div>
    <div>
			<div className="button" >
        <button onClick={showPrevious} className="button" type="button"> Back</button> 
       </div>

			<div className="button" >
        <button onClick={showQuote} className="button" type="button"> Next  </button> 			
       </div>

		</div>
    </div>

    </main>
  );
}

export default App;