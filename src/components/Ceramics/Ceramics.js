// import React from "react";
// import CeramicsCard from "./CeramicsCard";
// import ceramicsPosts from "../custom-hooks/ceramicsPosts";
// import Header from "../Header/Header";


// export default function Ceramics() {
//   const [ceramicPosts, isLoading] = ceramicsPosts();
//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div id="ceramics">
//     <Header />
//       {ceramicPosts.map((post) => (
//         <CeramicsCard
//           key={post.sys.id}
//           title={post.fields.title}
//           description={post.fields.description}
//           imgUrl={`http:${post.fields.featuredImage.fields.file.url}`}
//         />
//       ))}
//     </div>
//   );
// }
