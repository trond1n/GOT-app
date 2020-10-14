export default class GotServise {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, recieved ${res.status}`);
    }
    return await res.json();
  };
  getAllCharacters = async () => {
    const res = await this.getResourse(`/characters/?page=5&pageSize=10`);
    return res.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const character = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(character);
  };
  getAllBooks = async () => {
    const res = await this.getResourse(`/books/`);
    return res.map(this._transformBook);
  };
  getBook = async (id) => {
    const book = await this.getResourse(`/books/${id}/`);
    return this._transformBook(book);
  };
  getAllHouses = async () => {
    const res = await this.getResourse(`/houses/`);
    return res.map(this._transformHouse);
  };
  getHouse = async (id) => {
    const house = await this.getResourse(`/houses/${id}/`);
    return this._transformBook(house);
  };

  // isSet(data) {
  //   if (data) {
  //     return data;
  //   } else {
  //     return "no data :(";
  //   }
  // }
  // _extractId(item){
  //   const idRegExp = /\/([0-9]*)$/;
  //   return item.url.match(idRegExp)[1]
  // }
  _transformCharacter = (char) => {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  };

  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestraWeapons: house.ancestraWeapons,
    };
  };
  _transformBook = (book) => {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      realised: book.realised,
    };
  };
}
// const got = new GotServise();
