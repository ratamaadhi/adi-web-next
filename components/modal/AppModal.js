import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

function Modal({
  isOpen = false,
  closeModal,
  title = 'Title',
  children,
  withClose = true,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="glassmorph border-tertiary bg-background/75 text-secondary max-w-md rounded-xl border p-6 shadow-xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <DialogTitle className="text-lg font-medium leading-6">
            {title}
          </DialogTitle>
          {withClose && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md border border-tertiary text-secondary hover:bg-tertiary/20"
              onClick={() => closeModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </DialogHeader>

        <div className="mt-8">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
