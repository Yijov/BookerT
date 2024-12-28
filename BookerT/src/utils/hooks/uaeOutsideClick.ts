import { RefObject, useEffect } from "react";
/** */
export const useOutsideClick = (
  ref: RefObject<Node | Element>,
  callback = (_e = {}) => {}
) => {
  const handleOutsideClick = (event: MouseEvent) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return callback;
};
