import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

/*
 * Unfortunately programmatically setting order in Tailwind does not work,
 * although syntax is completely ok. That's why it is hardcoded in class definition.
 */

export const setPaginationData = (currentPage: number, totalPages: number) => {
  return [
    {
      id: "start",
      icon: ChevronDoubleLeftIcon,
      value: 1,
      style: "btn-circle el-color-primary order-1",
      // order: 1,
      disabled: currentPage === 1,
    },
    {
      id: "minus 1",
      icon: ChevronLeftIcon,
      value: currentPage - 1,
      style: "btn-circle el-color-secondary order-2",
      // order: 2,
      disabled: currentPage === 1,
    },
    {
      id: "plus 1",
      icon: ChevronRightIcon,
      value: currentPage + 1,
      style: "btn-circle el-color-secondary order-4",
      // order: 4,
      disabled: currentPage === totalPages,
    },
    {
      id: "end",
      icon: ChevronDoubleRightIcon,
      value: totalPages,
      style: "btn-circle el-color-primary order-5",
      // order: 5,
      disabled: currentPage === totalPages,
    },
  ];
};
