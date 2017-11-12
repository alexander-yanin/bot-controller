const fetch = require(`node-fetch`);
const urlencode = require(`urlencode`);

class VK {
    constructor() {
        this.uri = `https://api.vk.com/method`;
    }

    async getWall(ownerId, token) {
        let uri = `${this.uri}/wall.get?owner_id=${ownerId}&access_token=${token}&count=10`;
        console.log(uri);
        let response = await fetch(uri);
        let data = await response.json();
        return data.response.slice(1, data.response.length)[0];
    }

    async addPost(ownerId, post, token) {
        let text = urlencode(post.text);
        let uri = `${this.uri}/wall.post?access_token=${token}&owner_id=${ownerId}&message=${text}`;
        console.log(uri);
        let response = await fetch(uri);
        let data = await response.json();
    }
}

module.exports = VK;