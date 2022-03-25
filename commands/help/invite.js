const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Stellar BOT",
  run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/api/oauth2/authorize?client_id=956651967860596736&permissions=8&scope=bot)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Stellar bot`,
      client.user.displayAvatarURL(),
      message.delete()
    );

    message.channel .send(embed)


  }
}
