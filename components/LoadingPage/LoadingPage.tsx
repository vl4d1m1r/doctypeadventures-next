import Modal from "../Modal";
import PostSkeleton from "./elements/PostSkeleton";

export default function LoadingPage() {
  return (
    <>
      <div className="flex flex-col my-4 gap-4 lg:gap-8 lg:grid lg:grid-cols-3">
        {[...Array(6)].map((index) => {
          // In this case of repeating same n elements it is allowed to use index as a key
          return <PostSkeleton key={index} />;
        })}
      </div>
      <Modal>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-sm">LOADING MUTHA... LOADING!</div>
          <div className="animate-bounce">ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ</div>
        </div>
      </Modal>
    </>
  );
}
