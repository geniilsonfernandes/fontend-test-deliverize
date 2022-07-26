import { useCallback } from "react";

const useDocumentTitle = () => {
  const setTitle = useCallback((title) => {
    document.title = title;
  }, []);
  return { setTitle };
};

export default useDocumentTitle;
