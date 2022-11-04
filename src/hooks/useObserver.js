import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, postsLoading, callback) => {
	const observer = useRef()
	useEffect(() => {
    if (postsLoading) return
    if (observer.current) observer.current.disconnect()

    var cb = function(entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [postsLoading])
}