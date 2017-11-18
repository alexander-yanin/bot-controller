const request = require(`request`);

class Provider {
    constructor(setting, user) {
        this.setting = setting;
        this.user = user;
    }

    generateUri(methodName, params) {
        let queryParams = "";
        for (let param in params) {
            queryParams += `${param}=${params[param]}&`
        }
        console.log(queryParams);

        return `${this.setting.uri}/${this.setting.methods[methodName].uri}?${queryParams}`;
    }

    userGet(params) {
        let uri = this.generateUri("getUser", params);
        console.log(uri);
        request.get(uri, (err, res, body) => {
            console.log(body);
        });
    }
}

module.exports = Provider;