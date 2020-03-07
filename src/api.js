import axios from "axios";

const api = {
  reports: () => axios.get("https://api.coronas.info/reports/"),
  patients: () => axios.get("https://api.coronas.info/reports/"),
  locations: () => axios.get("https://api.coronas.info/reports/location/"),
  news: () => axios.get("https://api.coronas.info/news/")
};

export default api;
