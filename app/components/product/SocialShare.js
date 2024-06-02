"use client";
import { dict } from "@/app/dict/dict";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function SocialShare({ productId, name, lang }) {
  const productURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}`;
  console.log("🚀 ~ SocialShare ~ productURL:", productURL);
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 mt-4">
        <p className="text-md">{dict(lang, "Share Via")}:</p>
        <FacebookShareButton url={productURL} title={name}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={productURL} title={name}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={productURL} title={name}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
