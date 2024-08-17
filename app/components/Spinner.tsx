import Throbber from "./shared/Spinner";
export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center rounded-lg ">
      <div role="status">
        <Throbber />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
