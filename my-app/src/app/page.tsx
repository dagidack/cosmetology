import { client } from "../../sanity/lib/client";

type Post = {
  _id: string;
  title: string;
};

export default async function Home() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]{ _id, title }`);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>{post.title}</li>
      ))}
    </ul>
  );
}
