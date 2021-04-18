import { TextChannel, Client } from "discord.js";

async function getTextChannel(id: string): Promise<TextChannel> {
  const client = new Client();

  client.token = process.env.DISCORD_TOKEN;

  await client.guilds.fetch("688319338989748291");

  const channel = await client.channels.fetch(id);

  if (!(channel instanceof TextChannel)) {
    throw new Error("channel is not text channel");
  }

  return channel;
}

export default getTextChannel;
