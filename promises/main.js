let products = document.querySelector('.products')

function fetchProducts(callback) {
    fetch('https://dummyjson.com/products')
    .then(res=>{
        return res.json()
    })
    .then(data => {
        // console.log(data);
        return callback(data, null)
    })       
    .catch(error=>{
        return callback('Error fetching products:', error)
    })
}

// fetchProducts((error, data))

function processData(){

    fetchProducts((data, error  )=>{
        
        if(error){
            console.log(error);

            return;
        }

        stock = data.products
            console.log(stock);

            stock.forEach((product, index)=>{
                let item = document.createElement("div")
                item.className = "product"

                let image=document.createElement('img')
                image.setAttribute('src', product.thumbnail)

                let title =  document.createElement('div')
                title.className = "title"
                title.textContent = product.title

                let price =  document.createElement('div')
                price.className = "price"
                price.textContent = `Ksh. ${product.price}`

                let viewbtn = document.createElement('button')
                viewbtn.textContent = "View Item"
                viewbtn.addEventListener('click', ()=>{
                    window.location.href = `product.html?id=${product.id}`
                })

                item.appendChild(image)
                item.appendChild(title)
                item.appendChild(price)
                item.appendChild(viewbtn)

                products.appendChild(item)
            })


        
        

        
    })
}

processData()

