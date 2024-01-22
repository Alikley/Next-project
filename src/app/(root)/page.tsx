// "use client"
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPost } from "@/lib/actions/thread.action";
import { currentUser } from "@clerk/nextjs";
 
export default async function Home() {

  const user = await currentUser();
  if (!user) return null;

  const result = await fetchPost(1, 30);

  


  return (
    <div className="h-screen">
      <h1 className="text-white">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.Posts.length === 0 ? (
          <p className="no-result">No Thread found</p>
        ):(
          <>
            {result.Posts.map((post) => (
              <ThreadCard
              key={post._id}
              id={post._id}
              currentUserId={user.id}
              parentId={post.parentId}
              content={post.text}
              author={post.author}
              community={post.community}
              createdAt={post.createdAt}
              comments={post.children}
              />
            ))}
          </>
        )}

      </section>
    </div>
  )
}