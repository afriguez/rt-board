import { ReactElement } from "react";

export const IconBtn = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-1 active:shadow-none">
      {children}
    </div>
  );
};
