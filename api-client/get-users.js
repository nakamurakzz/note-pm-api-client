import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const notePMAuthToken = process.env.NOTEPM_AUTH_TOKEN;
const notepmApiBaseUrl = "https://ncdc.notepm.jp/api/v1/"

const main = async() => {
  if(!notePMAuthToken) {
    console.log("NOTEPM_AUTH_TOKEN is not set");
    return;
  }
  const options = {
    "method" : "get",
    "contentType" : "application/json",
    "headers" : {
      "Authorization": `Bearer ${notePMAuthToken}`
    },
  };

  try {
    const response = await axios.get(notepmApiBaseUrl + "users?per_page=100", options);
    const users = response.data.users;      
    console.log({users})
  } catch (error) {
    console.error(error);  
  }
}

main();