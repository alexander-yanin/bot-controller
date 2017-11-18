class User {
    constructor(id, firstName, lastName, vkId, token, status) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._vkId = vkId;
        this._token = token;
        this._status = status;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get vkId() {
        return this._vkId;
    }

    set vkId(value) {
        this._vkId = value;
    }

    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

new User({'first':'ad','second':'masdmh'});

module.exports = User;