"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { LuMenu } from "react-icons/lu";

export function NavModal() {
  return (
    <Modal>
      <ModalTrigger>
        <div
          className="focus:outline-none bg-background border-input border p-2 rounded-md flex items-center justify-center"
          role="button"
          aria-label="Open Navigation Modal"
        >
          <LuMenu className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
        </div>
      </ModalTrigger>
      <ModalBody className="mx-[1rem] border-input border rounded-md">
        <ModalContent className="flex justify-center">
          <div className="py-10 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 items-start text-lg">
              <li>Home</li>
              <li>Projects</li>
              <li>Resume</li>
            </ul>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
