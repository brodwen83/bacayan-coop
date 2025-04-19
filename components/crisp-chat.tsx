"use client";

// https://help.crisp.chat/en/article/how-to-install-crisp-live-chat-on-nextjs-xh9yse/

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CRISP_WEBSITE_ID =
  process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || "your_website_id";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID);
  });

  return null;
};

export default CrispChat;
