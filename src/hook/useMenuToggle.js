import { useEffect, useState } from "react";

const useMenuToggle = (options) => {
  const [isVisibility, setIsVisibility] = useState(false);

  const toggle = () => {
    setIsVisibility((s) => !s);
  };

  useEffect(() => {
    if (options?.lockBody) {
      isVisibility
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = null);
    }
  }, [isVisibility, options]);

  return {
    toggle,
    isVisibility
  };
};

export default useMenuToggle;
