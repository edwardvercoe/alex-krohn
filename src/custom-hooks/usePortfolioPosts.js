import { useEffect, useState } from "react";

import { getPortfolioPosts } from "../api/contentful";

const promise = getPortfolioPosts();

export default function usePortfolioPosts() {
  const [portfolioPosts, setPortfolioPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((data) => {
      setPortfolioPosts(data);
      setLoading(false);
    });
  }, []);

  return [portfolioPosts, isLoading];
}
