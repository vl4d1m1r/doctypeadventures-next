import { reports } from "@/models/constants";
import Report from "@/components/Report";

export default function Loading() {
  return <Report report={reports.loading} />;
}
