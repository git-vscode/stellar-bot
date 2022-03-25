const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "developer",

  category: "info",
    aliases: ['developers', 'developer'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField(
              "**• Developers**",
              "-invisible-#0133"
            )


            .setTimestamp()
           .setFooter(
           `Stellar bot`,
            client.user.displayAvatarURL()
      ))
         }
};
