import axios from 'axios';

export default axios.create({
    baseURL: 'https://code-catalist-phone-book-rails.herokuapp.com'
});