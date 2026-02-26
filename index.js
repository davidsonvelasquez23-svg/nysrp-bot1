const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("NYS RP Bot online"));
app.listen(process.env.PORT || 10000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("BOT ONLINE");
  console.log("Conectado como:", client.user.tag);
});

client.login(process.env.TOKEN);
