import axios from 'axios';
axios.get('http://127.0.0.1:3000/api/products')
.then(res=>console.log(res));
console.log(1);