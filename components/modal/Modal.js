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
        <div className="min-h-screen bg-primary/75 px-4 text-center">
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
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-xl border border-tertiary bg-primary p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="div"
                className="flex items-center justify-between"
              >
                <h3 className="text-lg font-medium leading-6 text-secondary">
                  {title}
                </h3>
                {withClose && (
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-tertiary p-2 text-sm font-medium text-secondary"
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
