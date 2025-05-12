import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoader = () => {
  return (
    <section className="grid grid-cols-3 gap-6 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col space-y-4 w-[250px] h-[370px] p-4"
        >
          <Skeleton className="h-full w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsLoader;
