import Image from "next/image";
import { Avatar as AvatarMui } from "@mui/material";
import { AvatarProp } from "./types";
import { FC } from "react";

export const Avatar: FC<AvatarProp> = ({ src, alt }) => {
  return (
    <AvatarMui>
      <Image
        alt={alt}
        src={src}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </AvatarMui>
  );
};
