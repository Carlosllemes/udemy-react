import { PostCard } from '../PostCard'

export const Posts = ({ posts }) => (
    <div className="row">
        {posts.map(posts =>
        (
            <PostCard
                key={posts.id}
                id={posts.id}
                cover={posts.cover}
                title={posts.title}
                body={posts.body}
            />
        )
        )}
    </div>
)