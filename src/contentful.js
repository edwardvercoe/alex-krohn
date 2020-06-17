const client = require('contentful').createClient({
    space: 't6tq66n2i7hc',
    accessToken: 'BvsXvCBmMVNp0zmnxjBgk0ncFIXyebKiYN9yRVmBCsc'
  })
  
  const getAllPosts = () => client.getEntries().then(response => response.items)
  
  const getCeramicsPosts = () =>
    client
      .getEntries({
        content_type: 'ceramics'
      })
      .then(response => response.items)
  
  export { getAllPosts, getCeramicsPosts }