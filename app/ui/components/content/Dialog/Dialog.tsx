"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export interface DialogProps {
  onClose?: (open: boolean) => void;
  open?: boolean;
  url?: string;
  alt?: string;
}

export default function ImageDialog({
  onClose,
  open = false,
  url = "",
  alt = "",
}: DialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose ?? (() => {})}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center  lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex m-0 md:m-12 items-center overflow-hidden bg-white pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => onClose?.(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              <div className="grid grid-cols-1 items-start lg:items-center height-full">
                <Image
                  alt={alt || "Image"}
                  src={url || ""}
                  className="max-w-full max-h-lvh w-auto h-lvh rounded-lg bg-gray-100 object-cover"
                  height={800}
                  width={800}
                  loading="lazy"
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
