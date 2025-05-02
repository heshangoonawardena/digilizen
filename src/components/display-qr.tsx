import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import QRCode from "qrcode";
import Image from "next/image";

interface QRCodeOverlayProps {
  licenseId?: string;
}
const DisplayQr = ({ licenseId }: QRCodeOverlayProps) => {
  QRCode.create("hi");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-4 flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-white p-3 transition-shadow hover:shadow-md">
          <div className="text-center">
            <div className="mx-auto mb-1 flex h-24 w-24 items-center justify-center rounded-md bg-gray-200">
              <div className="h-full w-full bg-[url('/placeholder.svg?height=96&width=96')] bg-center bg-no-repeat"></div>
            </div>
            <p className="text-xs text-gray-500">Click to view QR</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle>License QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <Image
            src={
              "https://img.freepik.com/premium-vector/qr-code-sample-vector-abstract-icon-isolated-white-background-vector-illustration_125869-2366.jpg"
            }
            alt="QR Code"
            className="h-40 w-40"
          />
          <p className="text-center text-xs text-gray-500">
            Scan this QR code to verify your license.
          </p>
        </div>
        <DialogClose asChild>
          <Button variant="outline" className="mt-2 w-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DisplayQr;
