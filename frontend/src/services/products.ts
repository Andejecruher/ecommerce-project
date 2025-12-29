const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:54321/api';


const allProducts = async () => {
    const response = await fetch(`${apiUrl}/products`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching all products:', error);
            return error;
        });
    return response;
};


const getPopularProducts = async () => {
    const response = await fetch(`${apiUrl}/products/popular/our`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching popular products:', error);
            return error;
        });

    return response;
};


const getTarjetas = async () => {
    const response = await fetch(`${apiUrl}/products/tarjeta`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error  tarjetas:', error);
            return error;
        });

    return response;
};



export {allProducts, getPopularProducts, getTarjetas };