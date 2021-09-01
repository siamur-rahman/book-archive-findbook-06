
// books search
const searchBook = () => {
   const book = document.getElementById('book-name');
   const bookNames = book.value;
   book.value = '';
   const url = `http://openlibrary.org/search.json?q=${bookNames}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displaySearchBook(data.docs));
}

// display books 
const displaySearchBook = books => {
   const searchReslt = document.getElementById('search-result');
   books.forEach(book => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
             <div onclick= "loadBookImage()" class="card h-100">
             
             <img src="https://covers.openlibrary.org/b/id/${book.cover_i}.jpg" class="card-img-top" alt="...">
             <div class="card-body"> 
             <h2 class="card-title">Title:${book.title}</h2>
             <h5 class="card-title">Author: ${book.author_name}</h5>
             <p class="card-text">first publish: ${book.first_publish_year}</p>
          </div>
       </div>
      `;
      searchReslt.appendChild(div);
   })
}
