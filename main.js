const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const BookContainer = document.getElementById("books-container");
const BookNumbers = document.getElementById("books-number");
const bookDetails = document.getElementById("books-details");
const errorDiv = document.getElementById("error");


searchBtn.addEventListener("click", function () {
   const search = searchInput.value;


   if (search === "") {
      errorDiv.innerText = "Search field cannot be empty.";
      //   Clear
      BookContainer.innerHTML = " ";
      BookNumbers.innerText = "Search results: 00";
      return;
   }
   searchInput.value = "";


   const url = `https://openlibrary.org/search.json?q=${search}`;
   fetch(url)
      .then((res) => res.json())
      .then((data) => showData(data));
});

const showData = bookArray => {

   {
      //error handling
      if (bookArray.numFound === 0) {
         errorDiv.innerText = "No result found";
         BookContainer.innerHTML = " ";
      }
      else {
         errorDiv.innerText = "";
      }

      const docs = bookArray.docs;
      BookNumbers.innerText = `Search results : ${docs.length}`;

      docs.forEach((item) => {
         const div = document.createElement("div");
         div.classList.add("col-md-3");
         div.innerHTML = `
            <!-- Image -->
            <div class="rounded overflow-hidden border p-2">
              <img
                src="https://covers.openlibrary.org/b/id/${item.cover_i}.jpg"
                class="w-100"
                alt=""
              />
            </div>
            <!-- Body -->
            <div
              class=" py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
            <div class="card-body"> 
            <h2 class="card-title">Title:${item.title}</h2>
            <h5 class="card-title">author: ${item.author_name}</h5>  
            <p class="card-text">first published: ${item.first_publish_year}</p>
            </div>   
            `;
         BookContainer.appendChild(div);
      });
   }
}