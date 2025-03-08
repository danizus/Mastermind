import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { HTMLProps, ReactNode } from "react";

export function CustomButton({
  children,
  textClassNames,
  bgClassNames,
  href,
  ...rest
}: HTMLProps<HTMLAnchorElement> & {
  href?: string;
  textClassNames?: string;
  bgClassNames?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href ? href : "#"}
      className="group relative z-10 inline-flex items-center gap-x-4 p-4"
    >
      <span
        className={cn(
          "pulse-updown absolute right-0 top-1/2 -z-10 block h-12 w-12 -translate-y-1/2 rounded-full bg-[#F2F2F2] transition-all duration-300 group-hover:w-full",
          bgClassNames || "",
        )}
      ></span>
      <span className={cn("text-wrapper flex gap-2 items-center ", textClassNames || "")}>
        {children}
        <FiPlus size={"0.8em"} />
      </span>
    </a>
  );
}
