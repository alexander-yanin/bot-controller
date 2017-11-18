const request = require(`request`);

class Provider {
    constructor(setting, user) {
        this.setting = setting;
        this.user = user;
    }

    generateUri(methodName, params) {
        let queryParams = Object.keys(params).reduce((previousValue, key) => {
            return `${previousValue}&${key}=${params[key]}`
        }, `access_token=${this.user.token}`);
        // }, ``);
        return `${this.setting.uri}/${this.setting.methods[methodName].uri}?${queryParams}`;
    }

    userGet(params) {
        let uri = this.generateUri("getUser", params);
        console.log(uri);
        request.get(uri, (err, res, body) => {
            console.log(body);
        });
    }

    wallGet(params) {
        let uri = this.generateUri("getWall", params);
        console.log(uri);
        request.get(uri, (err, res, body) => {
            console.log(body);
        });
    }

    addLike(params) {
        let uri = this.generateUri("addLike", params);
        console.log(uri);
        request.get(uri, (err, res, body) => {
            console.log(body);
        });
    }
}

module.exports = Provider;