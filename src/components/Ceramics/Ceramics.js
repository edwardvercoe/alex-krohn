import React from 'react'
import CeramicsCard from "./CeramicsCard"
import usePosts from '../custom-hooks/usePosts'

export default function Ceramics() {
    const [ceramicPosts, isLoading] = usePosts()
    if (isLoading) return <p>Loading...</p>

    return (
        <div id="ceramics">
        {
            ceramicPosts.map(post => (<CeramicsCard key={post.sys.id} title={post.fields.title} description={post.fields.description} imgUrl={`http:${post.fields.featuredImage.fields.file.url}`} />))
        }



        </div>
    )
}
