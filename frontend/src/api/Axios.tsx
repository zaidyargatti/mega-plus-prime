import axios from "axios";


const url1 ="https://mega-plus-prime.onrender.com" 
const url2 ="http://localhost:3000/api"
export default axios.create({
  baseURL: url1 ?? url2
});
 