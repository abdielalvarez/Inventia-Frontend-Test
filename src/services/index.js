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
                mode: 'cors'
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

    async post(endpoint, body = {}) {
        const url = `${this.baseURL}/${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                mode: 'cors'
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

    async postFormData(endpoint, body) {
        const url = `${this.baseURL}/${endpoint}`;
        const formData = this.convertToFormData(body);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'cors'
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

    convertToFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => {
            if (key === 'files') {
                object[key].forEach(file => {
                    formData.append('files', file);
                });
            } else {
                formData.append(key, object[key]);
            }
        });
        return formData;
    }
}

export default ApiService;
