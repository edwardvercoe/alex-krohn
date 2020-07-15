const client = require("contentful").createClient({
  space: "t6tq66n2i7hc",
  accessToken: "BvsXvCBmMVNp0zmnxjBgk0ncFIXyebKiYN9yRVmBCsc",
});

const getPortfolioPosts = () =>
  client
    .getEntries({
      content_type: "portfolioOrder",
    })
    .then((response) => response.items);

const getPlayPosts = () =>
  client
    .getEntries({
      content_type: "playDisplayOrder",
    })
    .then((response) => response.items);

const getSinglePlay = (slug) =>
  client
    .getEntries({
      content_type: "play",
      "fields.slug": slug,
    })
    .then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      content_type: "project",
      "fields.slug": slug,
    })
    .then((response) => response.items);

export { getSinglePost, getPortfolioPosts, getPlayPosts, getSinglePlay };
