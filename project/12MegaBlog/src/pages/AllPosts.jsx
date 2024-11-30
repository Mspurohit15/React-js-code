import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

        // useEffect with an empty dependency array is used to run the fetch only once when the component mounts.
        useEffect(() => {
            // Fetch posts using the appwriteService. The async operation needs to be handled properly.
            appwriteService.getPosts([]).then((posts) => {
                // Check if posts are returned and update the state
                if (posts) {
                    setPosts(posts.documents); // Assumes `documents` is the array of posts
                }
            }).catch((error) => {
                // Handle any errors during the fetch
                console.error("Failed to fetch posts:", error);
            });
        }, []); // Empty dependency array ensures this runs only once after the component mounts.
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} /> {/* Spread post properties into PostCard */}
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts