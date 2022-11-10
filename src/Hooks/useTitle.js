import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Uber Barber`;
  }, [title]);
};

export default useTitle;
