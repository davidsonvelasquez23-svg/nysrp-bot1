// ===============================
// NYSRP-BOT1 - MAIN FILE
// Render + Express + Discord.js
// ===============================

const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// ===== WEB SERVER (AUTO-PING) =====
const app = express();

app.get("/", (req, res) => {
  res.send("NYSRP-BOT1 ONLINE");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Web server activo en puerto " + PORT);
});

// ===== DISCORD CLIENT =====
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// ===== BOT READY =====
client.once("ready", () => {
  console.log(`🤖 Conectado como ${client.user.tag}`);
});

// ===== DEBUG =====
console.log("Intentando conectar a Discord...");

// ===== LOGIN =====
client.login(process.env.TOKEN);

// ===== ERROR LOG =====
process.on("unhandledRejection", err => {
  console.log("ERROR:", err);
});
