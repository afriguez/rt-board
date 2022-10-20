import { IconBtn } from "./IconBtn";
import { ArrowIcon, PencilIcon, ShapeIcon, TextIcon } from "./Icons";

export const Sidebar = () => {
  return (
    <div className="flex h-[314px] w-[78px] flex-col items-center justify-between rounded-lg bg-white shadow-md">
      <IconBtn children={<PencilIcon />} />
      <IconBtn children={<ArrowIcon />} />
      <IconBtn children={<TextIcon />} />
      <div className="my-1 h-3 w-[64px] rounded bg-black"></div>
      <IconBtn children={<ShapeIcon />} />
    </div>
  );
};
