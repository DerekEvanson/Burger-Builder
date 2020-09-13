import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://a-react-burger.firebaseio.com/',
});

export default instance;
