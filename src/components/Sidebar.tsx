import { IconBtn } from "./IconBtn";
import { ArrowIcon, PencilIcon, ShapeIcon, TextIcon } from "./Icons";

export const Sidebar = () => {
  return (
    <div className="flex h-[250px] w-[50px] flex-col items-center justify-between rounded-lg bg-white shadow-md">
      <IconBtn children={<PencilIcon />} />
      <IconBtn children={<ArrowIcon />} />
      <IconBtn children={<TextIcon />} />
      <div className="my-1 h-2 w-[80%] rounded bg-black"></div>
      <IconBtn children={<ShapeIcon />} />
    </div>
  );
};
