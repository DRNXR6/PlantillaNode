async function getProduct() {
    try {
        const response = await fetch('http://localhost:3001/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Product');
        }

        const Product = await response.json();
        return Product;
    } catch (error) {
        console.error('Error fetching Product:', error);
        throw error;
    }
}

export { getProduct };

//////////LLAMADO POST//////////

async function postProduct(producto,precio,stock) {
    try {
     
        const productData = { 
            producto,
            precio,
            stock
        
        };



        const response = await fetch("http://localhost:3001/product", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postProduct}

//////////////LLAMADO UPDATE/////////////


async function updateProduct(producto,precio,stock,id) 
{
    try {
     
        const productData = { 
            producto, 
            precio,
            stock
        
        };


        const response = await fetch("http://localhost:3001/product/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update product:', error);
        throw error;
    }
}

export{updateProduct}



//////////////LLAMADO DELETE/////////////


async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3001/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting product with id ${id}`);
        }

        return { message: `Product with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { deleteProduct };