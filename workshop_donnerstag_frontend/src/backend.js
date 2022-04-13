const BACKEND_URL = "http://localhost:9001";
//const slowDown = "?slow"; // ""
const slowDown = "";

export async function fetchJson(path) {
  const url = `${BACKEND_URL}${path}${slowDown}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response from server not OK: ${response.status}`);
  }
  return await response.json();
}

export async function sendJson(method, path, payload = {}) {
  const url = `${BACKEND_URL}${path}`;

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Response from server not OK: ${response.status}`);
  }

  return await response.json();
}
