import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

interface optionalObj {
  url: string;
  params: {
    id?: string;
    part?: string;
    maxResults?: string;
  };
  headers: object;
}

const options: optionalObj = {
  url: BASE_URL,
  params: {
    id: "",
    part: "snippet,statistics",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string, id: string = "") => {
  if (id === "") {
    delete options.params.id;
    delete options.params.part;
    options.params.maxResults = "50";
  } else {
    options.params.id = id;
    options.params.part = "snippet,statistics";
    delete options.params.maxResults;
  }

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
