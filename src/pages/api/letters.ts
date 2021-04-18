import { NextApiHandler } from "next";
import crawler from "crawler-request";
import getTextChannel from "../../lib/discordAPI/getTextChannel";

const handler: NextApiHandler = async (req, res) => { // not really.
  const channel = await getTextChannel("818122702853242940"); // is thsi yes.

  const messages = (await channel.messages.fetch()).array();

  const attachments = messages
    .flatMap((message) => message.attachments.array());

  const promises = attachments.map(async ({
    url,
  }, index) => {
    const { text } = await crawler(url);

    const regex = /Veckobrev\s[a-z]+\sv\.?\s?[0-9]+/gi;

    const matchIndex = Math.max(text.search(regex), 0);
    const matchLength = text.match(regex)?.[0]?.length ?? 0;

    const content = text.slice(matchIndex + matchLength).trim();
    return {
      url,
      text: content,
      title: messages[index].content,
      id: index,
    };
  });

  const letters = await Promise.all(promises); // Promise.all converts array of promises

  res.json(letters);
};

export default handler;
