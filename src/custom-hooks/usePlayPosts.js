import { useEffect, useState } from "react";

import { getPlayPosts } from "../api/contentful";

const promise = getPlayPosts();

export default function usePlayPosts() {
  const [playPosts, setPlayPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((data) => {
      setPlayPosts(data);
      setLoading(false);
    });
  }, []);

  return [playPosts, isLoading];
}
