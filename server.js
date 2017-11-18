const express = require(`express`);
const app = express();
const SettingProvider = require(`./api/SettingProvider`);
const Provider = require(`./api/Provider`);
const User = require(`./src/user/User`);

let settingProvider = new SettingProvider(`https://api.vk.com/method`, {
    "getUser": {
        uri: "users.get"
    },
    "getWall": {
        uri: "wall.get"
    },
    "addLike": {
        uri: "likes.add"
    }
});
let user = new User(1, "Иван", "Бутлер", "evalbrlr", "TOKEN", "online");
let provider = new Provider(settingProvider, user);

provider.userGet({"user_ids": "","fields": "about,games,books,online,education,domain,nickname"});
provider.wallGet({"owner_id": "28500374", "count": "1"});
provider.addLike({"type": "post", "owner_id": "28500374", "item_id": "2967"});

app.listen(3001, () => {

});