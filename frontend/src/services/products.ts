
const apiUrl = import.meta.env.VITE_API_URL || '';

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

export { getPopularProducts };
