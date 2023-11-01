import { useRouter } from "next/navigation";
import { convertPropsToLocalRoute } from "@/controllers/utils";
import { setPaginationData } from "./models";
import { PaginationPropsType } from "./types";

export default function Pagination({ currentPage, totalPages, filter }: PaginationPropsType) {
  const router = useRouter();
  const paginationData = setPaginationData(currentPage, totalPages);
  const handlePageChange = (value: number) => {
    const filterAdjusted = { ...filter, page: value };
    router.push(convertPropsToLocalRoute(filterAdjusted));
  };

  return (
    <nav id="pagination" className="flex space-x-2 items-center justify-center">
      {paginationData.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => handlePageChange(item.value)}
            className={`${item.style} order-${item.order}`}
            disabled={item.disabled}
          >
            <item.icon className="icon-primary" />
          </button>
        );
      })}
      <div className="px-6 order-3">
        {currentPage} / {totalPages}
      </div>
    </nav>
  );
}
