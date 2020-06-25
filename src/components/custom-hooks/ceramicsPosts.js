// import { useEffect, useState } from "react";

// import { getCeramicsPosts } from "../../api/contentful";

// const promise = getCeramicsPosts();

// export default function useCeramicPosts() {
//   const [ceramicPosts, setCeramicPosts] = useState([]);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     promise.then((data) => {
//       setCeramicPosts(data);
//       setLoading(false);
//     });
//   }, []);

//   return [ceramicPosts, isLoading];
// }
