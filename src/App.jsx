import React from 'react';
import './App.css';
//import './ShowQuote.jsx';

const quotes = {
  "Walt Disney": '"Jeśli możesz sobie coś wymarzyć, możesz to zrobić."',
  "Nelson Mandela": '"Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione."',
  "Michael Jordan": '"Nie trafiłem ponad 9000 rzutów w moim życiu. Przegrałem ponad 300 meczów. 26 razu zaufano mi, gdy miałem oddać rzut na miarę zwycięstwa i spudłowałem. Przegrywałem w moim życiu ciągle. Dlatego właśnie osiągnąłem sukces."'
}

function App() {

	function showQuote() {
		//utworzenie tablicy z autorami z obiektu quotes 
		var autorzy = Object.keys(quotes);
		//wylosowanie liczby z tablicy autorzy
		var ranQuote = Math.floor(Math.random()* autorzy.length);
		
		var autor = autorzy[ranQuote];
		var quote = quotes[autor];
		
		document.getElementById('quote').textContent = quote;
		document.getElementById('autor').textContent = autor;
	}
	
  return (
    <main>
			<div>
      <h1>Random Quotes</h1>
      
      <div class="one" >
        
        <div id="quote">
          "Miejsce na cytat"
        </div>
        
      <div class="autor" id="autor">
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