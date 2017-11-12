class User {
    constructor(token, api, ownerId) {
        this.token = token;
        this.api = api;
        this.ownerId = ownerId
        setInterval(() => {
            this.run();
        }, 2000);
    }

    async run() {
        let post = await this.api.getWall(`-39080597`, this.token);
        await this.api.addPost(this.ownerId, post, this.token);
    }
}

module.exports = User;