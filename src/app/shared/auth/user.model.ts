export class User {
  constructor(public email: string, public username: string, public userId: string, private _token: string) {}

  get token() {

    // TODO: checken ob Token noch gueltig ist.

    return this._token;
  }
}