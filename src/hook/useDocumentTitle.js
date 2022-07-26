import { useCallback } from "react";

const useDocumentTitle = () => {
  const setTitle = useCallback((title) => {
    console.log(title);
    document.title = title;
  }, []);
  return { setTitle };
};

export default useDocumentTitle;
