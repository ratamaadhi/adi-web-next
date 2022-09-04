import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { HiOutlineX } from 'react-icons/hi';

function Modal({
  isOpen = false,
  closeModal,
  title = 'Title',
  children,
  withClose = true,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        onClose={() => closeModal(false)}
      >
        <div className="min-h-screen px-4 text-center bg-primary/75">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-primary border border-tertiary shadow-xl rounded-xl">
              <Dialog.Title
                as="div"
                className="flex justify-between items-center"
              >
                <h3 className="text-lg font-medium leading-6 text-secondary">
                  {title}
                </h3>
                {withClose && (
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-sm font-medium text-secondary border border-tertiary rounded-md"
                    onClick={() => closeModal(false)}
                  >
                    <HiOutlineX />
                  </button>
                )}
              </Dialog.Title>

              <div className="mt-8">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
