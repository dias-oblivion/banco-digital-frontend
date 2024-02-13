import { PropsWithChildren } from "react";

interface TypographyProps {
  children: string;
}

export function TypographyH2(props: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function TypographyTextMuted(props: TypographyProps) {
  return <p className="text-sm text-muted-foreground">{props.children}</p>;
}

export function TypographyText(props: PropsWithChildren) {
  return (
    <small className="text-sm font-medium leading-none">{props.children}</small>
  );
}
