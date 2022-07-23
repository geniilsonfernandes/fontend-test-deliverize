import { useEffect, useState } from "react";

const useMenuToggle = ({ lockBody }) => {
  const [isVisibility, setIsVisibility] = useState(false);

  const toggle = () => {
    setIsVisibility((s) => !s);
  };

  useEffect(() => {
    if (lockBody) {
      isVisibility
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = null);
    }
  }, [isVisibility]);

  return {
    toggle,
    isVisibility
  };
};

export default useMenuToggle;
