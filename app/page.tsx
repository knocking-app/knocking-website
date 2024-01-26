import { LemmyHttp, PostView } from 'lemmy-js-client'

async function getData(): Promise<{posts: PostView[]}> {
  const baseUrl = 'https://knocking.ru';
  const client: LemmyHttp = new LemmyHttp(baseUrl);
  return client.getPosts({sort: 'Hot', community_id: 4});
}

export default async function Home() {
  const { posts } = await getData();
    
  return (
    <div>
        <h1>Posts list</h1>
        <ul>
          {
            posts.map(({ post }) => 
              <li key={post.id}>
                <a href={post.url} target="_blank">{post.name}</a>
              </li>
            )
          }
        </ul>
    </div>
  )
}