class Api {
  constructor({
    baseUrl,
    headers,
  }) {
    // eslint-disable-next-line no-underscore-dangle
    this._baseUrl = baseUrl;
    // eslint-disable-next-line no-underscore-dangle
    this._headers = headers;
  }

  // eslint-disable-next-line no-underscore-dangle,class-methods-use-this
  _checkResponse(url) {
    return fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getCharacter(characterId) {
    // eslint-disable-next-line no-underscore-dangle
    return this._checkResponse(`${this._baseUrl}characters/${characterId}?apikey=f52d5ab6a0ef06ea3af165050b12d5d3`);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const api = new Api({
  baseUrl: 'https://gateway.marvel.com/v1/public/',
  headers: {
    'Content-Type': 'application/json',
    apikey: process.env.REACT_APP_API_KEY,
  },
});
