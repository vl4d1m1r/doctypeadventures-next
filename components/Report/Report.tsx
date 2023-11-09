import { ReportPropType, ReportTypes } from "@/types/components";
import Modal from "../Modal";
import PostSkeleton from "./elements/PostSkeleton";
import "./styles.css";

export default function Report({ report }: { report: ReportPropType }) {
  return (
    <>
      {report.type === ReportTypes.LOADING ? (
        <div className="report-skeleton-wrapper">
          {[...Array(6)].map((value, index) => {
            // In this case of repeating same n elements it is allowed to use index as a key
            return <PostSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
      <Modal>
        <div className="report-modal">
          {report.messages.map((message: string) => {
            return (
              <div key={message} className="text-sm">
                {message}
              </div>
            );
          })}
          <div className="animate-bounce">{report.animation}</div>
        </div>
      </Modal>
    </>
  );
}
