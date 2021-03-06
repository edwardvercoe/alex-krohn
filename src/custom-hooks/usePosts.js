import { useEffect, useState } from "react";

import { getAllPosts } from "../api/contentful";

const promise = getAllPosts();

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return [posts, isLoading];
}
