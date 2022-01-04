fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data)=> {
    console.log(data);
    data.forEach(result =>
        {document.getElementById("results").innerHTML += `
     
          <div class="card">
            <img src="${result.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title fs-6 ">${result.title}</h5>
              <p class="fs-6">${result.description}</p>
              <p class="fs-6"> price: R${result.price}</p>
            </div>
           
          </div>
        `});
        
});
