import { PropsWithChildren } from "react";

import { LinkProps } from "next/link";

export const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      href={href.toString() || ""}
      className="break-words text-primary underline-offset-4 hover:text-primary_sub"
    >
      {children}
    </a>
  );
};
