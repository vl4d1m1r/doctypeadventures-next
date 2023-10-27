import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { convertPropsToLocalRoute } from "@/controllers/utils";
import { PaginationPropsType } from "./types";

export default function Pagination({
  currentPage,
  totalPages,
  filter,
}: PaginationPropsType) {
  const router = useRouter();

  const handlePageChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    console.log("SLIDER PAGE NUMBER === ", value);
    if (typeof value === "number") filter.page = value;
    const localRoute = convertPropsToLocalRoute(filter);
    console.log("SLIDER PAGE apiRoute === ", localRoute);
    router.push(localRoute);
  };

  return (
    <Box display={"flex"}>
      <Slider
        defaultValue={currentPage}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={totalPages}
        onChange={handlePageChange}
      />
    </Box>
  );
}
