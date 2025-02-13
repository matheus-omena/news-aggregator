type BadgeCategoryProps = {
  category: string;
};

export function BadgeCategory({ category }: BadgeCategoryProps) {
  return <span className="ml-2 rounded-sm bg-[#16607d] px-1 text-[10px] font-medium text-white">{category}</span>;
}
