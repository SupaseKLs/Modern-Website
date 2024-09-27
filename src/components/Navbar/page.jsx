'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion
import Logo from '@/assets/star.svg';

const links = [
    { name: 'About', href: '#' },
    { name: 'Result', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'FAQs', href: '#' }
];

export default function Navbar() {
    return (
        <nav className="w-fit mt-4 px-2 border border-white/20 rounded-full backdrop-blur-md bg-white/[0.04]">
            <div className="flex justify-center py-2 px-10">
                <div>
                    <Image width={50} height={50} src={Logo} />
                </div>
                <ul className="flex items-center mx-20">
                    {links.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }} 
                        >
                            <FlipLink href={link.href} className="mx-4">
                                {link.name}
                            </FlipLink >
                        </motion.li>
                    ))}
                </ul>
                <div className="my-auto">
                    <button className="relative py-3 px-5 rounded-full uppercase text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                        <div className="absolute inset-0">
                            <div className="rounded-full border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                            <div className="rounded-full border absolute inset-0 border-white/60 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-full"></div>
                        </div>
                        <span>Join waitlist</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
const DURATION = 0.20;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="mx-4 relative block overflow-hidden white space-nowrap uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};