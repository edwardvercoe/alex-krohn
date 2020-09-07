import { useEffect, useState } from "react";

import { getSinglePlay } from "../api/contentful";

export default function useSinglePost(slug) {
  const promise = getSinglePlay(slug);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((result) => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, []);

  return [post, isLoading];
}
