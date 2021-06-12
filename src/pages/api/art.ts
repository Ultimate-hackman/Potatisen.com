import { NextApiHandler } from "next";

import getTextChannel from "../../lib/discordAPI/getTextChannel";

const handler: NextApiHandler = async (req, res) => { // not really.
  const channel = await getTextChannel("852171029698838528"); // is thsi yes.

  const messages = (await channel.messages.fetch()).array();

  const news = messages
    .map((message) => {
      const {
        attachments,
        content,
      } = message;

      const bruh = (JSON.stringify(attachments));

      return {
        text: content,
        aurl: JSON.parse(bruh)[0].attachment,
      };
    });

  res.json(news);
};

export default handler;
