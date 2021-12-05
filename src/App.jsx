import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
//import './ShowQuote.jsx';

// const quotes = {
//   "Walt Disney": '"Jeśli możesz sobie coś wymarzyć, możesz to zrobić."',
//   "Nelson Mandela": '"Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione."',
//   "Michael Jordan": '"Nie trafiłem ponad 9000 rzutów w moim życiu. Przegrałem ponad 300 meczów. 26 razu zaufano mi, gdy miałem oddać rzut na miarę zwycięstwa i spudłowałem. Przegrywałem w moim życiu ciągle. Dlatego właśnie osiągnąłem sukces."'
// }

//nie sporawdzam czy plik istnieje





function App() {
	const [quotes, setQuotes] = useState([]);
	useEffect(() => {
		fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/')
		.then((res) => res.json())
		.then(data => setQuotes(data))
		.catch(err => console.log(err))
	},[]);
	

	function showQuote() {
		let randomQuotes = Math.floor(Math.random() * quotes.length);
		console.log(randomQuotes);
		//var mydata = JSON.parse(quotes);
		//console.log(this.state.quotes);
		//utworzenie tablicy z autorami z obiektu quotes 
		//var autorzy = Object.keys(quotes);
		//wylosowanie liczby z tablicy autorzy
		//var ranQuote = Math.floor(Math.random()* autorzy.length);
		
		//var autor = autorzy[ranQuote];
		//var quote = quotes[autor];
		
		//document.getElementById('quote').textContent = quote;
		//document.getElementById('author').textContent = autor;
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
    
			<div class="button" >
        <button onClick={showQuote} class="btn btn-info" type="button"> Click me </button> 
       </div>

    </div>

    </main>
  );
}

export default App;