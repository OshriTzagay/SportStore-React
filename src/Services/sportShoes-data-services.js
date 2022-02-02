const basicApi = "https://localhost:44330/api/SportShoes";

export const getData = async () => {
  try {
    return await fetch(`${basicApi}`).then((res) => res.json());
  } catch (er) {
    console.error(er);
  }
};

// export const getDataById = (id)=>{
//     fetch(`${basicApi}/${id}`)
//     .then(res=>res.json())
//     .then(data=>data.shoeList.id);
// }
