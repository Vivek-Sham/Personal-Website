"use client";
import React from "react";
import Link from "next/link";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  Close,
} from "@/components/ui/animated-modal";
import { Menu } from "@/assets/icons/Menu";

export function NavModal() {
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
      <ModalBody className="mx-[2rem]  border-input border rounded-md">
        <ModalContent className="flex justify-center">
          <div className="py-10 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 items-start text-lg">
              <li>
                <Link href="/">
                  <Close>Home</Close>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <Close>Projects</Close>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Close>About</Close>
                </Link>
              </li>
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
