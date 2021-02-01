import { handleResponse, handleError } from "./apiUtils";
import { apiURL } from "./apiConstants";
const baseUrl = apiURL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
