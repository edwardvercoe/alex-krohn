import { useEffect, useState } from "react";

import { getFooter } from "../api/contentful";

const promise = getFooter();

export default function usePlayPosts() {
  const [footerContent, setFooterContent] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((data) => {
      setFooterContent(data);
      setLoading(false);
    });
  }, []);

  return [footerContent, isLoading];
}
