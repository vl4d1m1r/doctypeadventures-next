"use client";
import { reports } from "@/models/constants";
import Report from "@/components/Report";

export default function Error() {
  return <Report report={reports.error} />;
}
