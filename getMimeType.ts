import { mimes } from "./mod.ts";

export enum FileType {
  Binary = "application/octet-stream",
  Text = "text/plain",
}

export function getMimeType(f: string, fileType?: FileType): string {
  if (f.includes(".")) {
    let _ = f.split(".");
    let ext = `.${_[_.length - 1]}`;

    if (mimes[ext]) return mimes[ext];
    else if (fileType) return fileType;

    throw Error(
      "The file extension is not recognized and you have not specified whether it is a text file or a binary file.",
    );
  }

  if (fileType) return fileType;

  throw new Error(
    "This file does not contain an extension and you have not specified what kind of file it is.",
  );
}
