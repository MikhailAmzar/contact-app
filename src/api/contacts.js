import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost:3006/", //change baseurl whenever you use other real api
});
