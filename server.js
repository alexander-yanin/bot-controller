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
let user = new User(1, "Иван", "Бутлер", "evalbrlr", "31387fa2e2e54cc930631562e71fe9af8c0d53f09023204091b8dc0d872e52428cd1a725fbb9464164f46", "online");
let provider = new Provider(settingProvider, user);

provider.userGet({"user_ids": "","fields": "about,games,books,online,education,domain,nickname"})
    .then((user) => {
        let uid = user[0].uid;
        provider.wallGet({"owner_id": uid, "count": "1"})
            .then((wall) => wall)
            .then((wall) => {
                let postId = wall.slice(1)[0].id;
                return provider.addLike({"type": "post", "owner_id": uid, "item_id": postId});
            })
            .then((response) => {
                console.log(response);
            });
    });

// provider.wallGet({"owner_id": "28500374", "count": "1"});

// provider.addLike({"type": "post", "owner_id": "28500374", "item_id": "2967"});

app.listen(3001, () => {

});