const GetProducts = () =>
{
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data =>
        {
            data.map(item =>
            {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.brand}</td><td>${item.quantity}</td><td>${item.price}</td><td><button type="button" class="btn btn-danger btn-sm" onclick="DeleteProduct(${item.id})"><i class="fas fa-times"></i></button></td>`
                document.getElementById('tableBody').appendChild(row);
            });
        });
}

// AddProduct = async () => {
//     await fetch('http://localhost:3000/products', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: document.getElementById('pname').value,
//             brand: document.getElementById('brand').value,
//             quantity: document.getElementById('qty').value,
//             price: document.getElementById('price').value
//         })
//     });
//     GetProducts();
// }

// DeleteProduct = (productid) => {
//     fetch(`http://localhost:3000/products/${productid}`,{
//         method: 'DELETE'
//     });
//     GetProducts();
// }

// GetProducts();