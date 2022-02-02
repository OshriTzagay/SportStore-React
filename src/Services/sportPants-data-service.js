const basicApi = "https://localhost:44330/api/Clothes/";

const getPants = async () => {
  try {
    return await fetch(basicApi)
    .then(res=>res.json())
    
    
  } catch (error) {
    console.log(error);
  }
};
export default getPants;