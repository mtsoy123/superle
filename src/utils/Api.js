class Api {
  constructor({
    baseUrl,
    headers,
  }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(url) {
    return fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getCharacter(characterId) {
    return this._checkResponse(`${this._baseUrl}characters/${characterId}?apikey=f52d5ab6a0ef06ea3af165050b12d5d3`);
  }
}

export const api = new Api({
  baseUrl: 'https://gateway.marvel.com/v1/public/',
  headers: {
    'Content-Type': 'application/json',
    apikey: process.env.REACT_APP_API_KEY,
  },
});
