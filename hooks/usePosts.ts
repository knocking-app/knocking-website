import { LoginResponse, PostView } from "lemmy-js-client";
import { useLemmy } from "./useLemmy";
import { useEffect, useState } from "react";


export function usePosts(user: LoginResponse) {
    const [posts, setPosts] = useState<PostView[]>()
    const lemmy = useLemmy();

    useEffect( () => {
        if (!posts) {
            lemmy.getPosts({sort: 'Hot', community_id: 4})
              .then( res => res.posts)
              .then(setPosts)
        }
    }, [lemmy, posts])

    return { posts, update, createPost }

    async function update() {
        lemmy.getPosts({sort: 'Hot', community_id: 4})
          .then( res => res.posts)
          .then(setPosts)
    }

    async function createPost(url: string) {
        
    }
}