class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint, params = {}) {
        const url = new URL(`${this.baseURL}/${endpoint}`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors' // Se asegura de que las políticas de CORS se respeten
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}

export default ApiService;
