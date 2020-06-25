const client = require("contentful").createClient({
  space: "t6tq66n2i7hc",
  accessToken: "BvsXvCBmMVNp0zmnxjBgk0ncFIXyebKiYN9yRVmBCsc",
});

const getPortfolioPosts = () =>
  client
    .getEntries({
      content_type: "project",
    })
    .then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "project",
    })
    .then((response) => response.items);

export { getSinglePost, getPortfolioPosts };
