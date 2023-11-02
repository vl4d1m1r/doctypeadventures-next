import { ReportPropType, ReportTypes } from "@/types/components";
import Modal from "../Modal";
import PostSkeleton from "./elements/PostSkeleton";

export default function Report({ report }: { report: ReportPropType }) {
  return (
    <>
      {report.type === ReportTypes.LOADING ? (
        <div className="flex flex-col my-4 items-center gap-4 lg:gap-8 lg:grid lg:grid-cols-3">
          {[...Array(6)].map((index) => {
            // In this case of repeating same n elements it is allowed to use index as a key
            return <PostSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
      <Modal>
        <div className="flex flex-col items-center space-y-4">
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
