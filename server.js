const express = require(`express`);
const app = express();
const SettingProvider = require(`./api/SettingProvider`);
const Provider = require(`./api/Provider`);
const User = require(`./src/user/User`);

let settingProvider = new SettingProvider(`https://api.vk.com/method`, {
    "getUser": {
        uri: "users.get"
    }
});
let user = new User(1, `Иван`, `Бутлер`, `evalbrlr`, `dsjhr2khr3k2`, `online`);
let provider = new Provider(settingProvider, user);

provider.userGet({"user_ids": 1,"xyu":15});

app.listen(3001, () => {

});