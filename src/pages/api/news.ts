import { NextApiHandler } from "next";
import getTextChannel from "../../lib/discordAPI/getTextChannel";

const handler: NextApiHandler = async (req, res) => {
  const channel = await getTextChannel("823944868153262192"); // is thsi yes.

  const messages = await channel.messages.fetch();

  const news = messages
    .array()
    .map((message, index) => {
      const {
        content,
        createdAt,
      } = message;

      return {
        text: content,
        createdAt,
        id: index,
      };
    });

  res.json(news);
};

export default handler;
