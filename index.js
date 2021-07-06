let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: ""}}) //this is the bot status code..
})

client.on("guildMemberAdd", member => {
if (member.guild.id === "815519442481840138") { //enable your developer mode in your discord settings and right click your server.. then you should see copy id option...
  
  
  client.channels.cache.get("830086904564809818").send(`${member}نورت السيرفر يالغالي `)
}
})

client.login("ODU0MTI5NjQ0NTEzMTMyNTQ0.YMfcOA.MXX8CmFlQFr0ovaDQG8zs98Lkcg")


//Made by 365 ɢᴀᴍɪɴɢ ɴ ᴍᴏʀᴇ_2.0#6766 DONOT share without credits!!
