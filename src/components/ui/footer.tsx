import Link from "next/link";
import { LinkPreview } from "./link-preview";
import ProfileImg from "../../../public/profile.png";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { navItems } from "@/data";

const Footer = () => {
  return (
    <footer className="min-h-[50svh] flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2">
        <Image
          src={ProfileImg}
          alt="Arfan Roky"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <h4 className="text-lg font-bold text-white">Arfan Roky</h4>
      </div>
      <div className="flex items-center gap-12">
        {navItems
          .filter((item) => item.name !== "Home")
          .map((menu) => (
            <Link
              className="text-white text-sm leading-normal tracking-wide"
              key={menu.link}
              href={menu.link}
            >
              {menu.name}
            </Link>
          ))}
        <Link
          className="text-white text-sm leading-normal tracking-wide"
          href={"mailto:arfanroky.dev@gmail.com"}
        >
          Contact
        </Link>
      </div>

      {/* Divider */}
      <div className="max-w-sm w-full h-[1px] bg-zinc-800 mt-8"></div>
      <p className="text-sm leading-[140%] tracking-widest text-slate-300">
        © 2024 Arfan Roky. All rights reserved.
      </p>
      <div className="flex items-center gap-2">
        <LinkPreview url="https://x.com/arfanroky_dev">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandX size={18} />
          </div>
        </LinkPreview>
        <LinkPreview url="https://linkedin.com/in/arfanroky">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandLinkedin size={18} />
          </div>
        </LinkPreview>
        <LinkPreview url="https://github.com/arfan-roky">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandGithub size={18} />
          </div>
        </LinkPreview>
      </div>
    </footer>
  );
};

export default Footer;
