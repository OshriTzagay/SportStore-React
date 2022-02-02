const basicApi = "https://localhost:44330/api/Clothes/";

const getShirts = async () => {
  try {
    return await fetch(basicApi).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
};
export default getShirts;