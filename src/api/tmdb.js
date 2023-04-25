import axios from 'axios';

const apiKey = '0bfc62cd0a726c7374d94b46a20f5032';

const tmdb = axios.create ({

    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
        language: 'pt-BR'
    }
});

export default tmdb