export const fetchMeme = async () => {
  try{
    const response = await fetch("https://api.imgflip.com/get_memes");
    if(!response.ok) {
      throw {
        message: "Failed to fetch vans", 
        statusText: response.statusText,
        status: response.status
    };
    }
    const data = await response.json();
    return data.data.memes

  } catch(error) {
    throw new Error(error.message);
  };
};