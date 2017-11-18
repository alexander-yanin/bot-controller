const request = require(`request`);
const fetch = require(`node-fetch`);

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

    async userGet(params) {
        let uri = this.generateUri("getUser", params);
        let response = await fetch(uri);
        let parsedData = await response.json();

        return parsedData.response;
    }

    async wallGet(params) {
        let uri = this.generateUri("getWall", params);
        let response = await fetch(uri);
        let parsedData = await response.json();
        return parsedData.response;
    }

    async addLike(params) {
        let uri = this.generateUri("addLike", params);
        let response = await fetch(uri);
        let parsedData = await response.json();
        return parsedData.response;
    }
}

module.exports = Provider;