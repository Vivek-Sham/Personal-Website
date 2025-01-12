"use client";
import React from "react";
import Link from "next/link";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from "@/components/ui/animated-modal";
import { Menu } from "@/assets/icons/Menu";

export function NavModal() {
  const { setOpen } = useModal();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpen(false);
    const href = (e.target as HTMLAnchorElement).href;
    window.location.href = href;
  };

  return (
    <Modal>
      <ModalTrigger>
        <div
          className="focus:outline-none bg-background border-input border p-2 rounded-md flex items-center justify-center"
          role="button"
          aria-label="Open Navigation Modal"
        >
          <Menu className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
        </div>
      </ModalTrigger>
      <ModalBody className="mx-[1rem] border-input border rounded-md">
        <ModalContent className="flex justify-center">
          <div className="py-10 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 items-start text-lg">
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={handleLinkClick}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
