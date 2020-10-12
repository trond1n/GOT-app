export default class GotServise {
  constructor() {
    this._apiBase = "http://www.ananpioficeandfire.com/api";
  }

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, recieved ${res.status}`);
    }
    return await res.json();
  }
  getAllCharacters() {
    return this.getResourse(`/characters/?page=5&pageSize=10`);
  }
  getCharacter(id) {
    return this.getResourse(`/characters/${id}`);
  }
  getAllBooks() {
    return this.getResourse(`/books`);
  }
  getBook(name) {
    return this.getResourse(`${name}`);
  }
  getAllHouses() {
    return this.getResourse(`/houses/?pageSize=10`);
  }
  getHouse(name) {
    return this.getResourse(`${name}`);
  }
}
const got = new GotServise();
