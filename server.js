const express = require(`express`);
const app = express();
const VK = require(`./api/VK`);
const User = require(`./src/user/User`);

let vk = new VK();

app.listen(3001, () => {
    console.log(`server started`);
    new User(`a757abc7873dfbd2c96bb54548d21dbfd194c319edfb39cdaa2443fa28714aa08babf553b3a176b88e622`, vk, `-156757456`);
    new User(`a757abc7873dfbd2c96bb54548d21dbfd194c319edfb39cdaa2443fa28714aa08babf553b3a176b88e622`, vk, `-156763688`);
});