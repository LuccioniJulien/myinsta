import { BASE_URL } from "../api/constanApi";

export default async (url, { method = "GET", body, jwt }) => {
  const headers = {
    "Content-Type": "application/json"
  };
  if (jwt) {
    headers.Authorization = `Bearer ${jwt}`;
  console.log(jwt);

  }
  const options = {
    headers,
    method
  };
  if (method === "POST") {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(BASE_URL + url, options);
  const json = await res.json();
  verifStatut(json.statusCode);
  return json;
};

function verifStatut(statut) {
  switch (statut) {
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
    case 500:
      throw "Bad request";
  }
}
