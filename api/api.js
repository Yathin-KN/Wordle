import axios from "axios";
const useFetch = async() => {
   
    try {
      const response = await axios.get("http://localhost:8080/getword");
      console.log(response.data)
      const data=response.data;
      data=data.splice("")
      return data;

    } catch (error) {
      console.error(error);
    }
  
};

export default useFetch;