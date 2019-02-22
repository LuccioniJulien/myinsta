export default class User {
  static myInstance = null;
  _id = "";
  _token = null;

  static getInstance = () => {
    if (User.myInstance == null) {
      User.myInstance = new User();
    }

    return User.myInstance;
  };

  getUserToken = () => this._token;

  setUserToken = token => (this._token = token);

  getUserID = () => this._id;

  setUserID = id => (this._id = id);
}
