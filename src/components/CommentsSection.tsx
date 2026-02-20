import fbLike from '@/assets/fb-like.webp';
import fbLogo from '@/assets/fb-logo.webp';
import avatarLauren from '@/assets/avatar-lauren.webp';
import avatarDavid from '@/assets/avatar-david.webp';
import avatarMegan from '@/assets/avatar-megan.webp';
import avatarMatthew from '@/assets/avatar-matthew.webp';
import avatarJames from '@/assets/avatar-james.webp';
import avatarAshley from '@/assets/avatar-ashley.webp';
import avatarAmanda from '@/assets/avatar-amanda.webp';
import avatarJessica from '@/assets/avatar-jessica.webp';
import avatarSarah from '@/assets/avatar-sarah.webp';

interface Comment {
  avatar: string;
  name: string;
  text: string;
  likes: number;
  time: string;
}

const comments: Comment[] = [
  {
    avatar: avatarLauren,
    name: 'Lauren Thompson',
    text: "What a relief to have found this video. I work two jobs and I'm a single mother... every day I pray for guidance and a little more security. For the first time in a long time, I feel hope again. Amen!",
    likes: 23,
    time: '2 m',
  },
  {
    avatar: avatarDavid,
    name: 'David Anderson',
    text: "It was my sister who told me about this prayer… I honestly didn't believe it at first, but something shifted in my heart while watching. It worked really well for me here.",
    likes: 19,
    time: '10 m',
  },
  {
    avatar: avatarMegan,
    name: 'Megan Lewis',
    text: "Did it really help you? I've been struggling for months.",
    likes: 5,
    time: '7 m',
  },
  {
    avatar: avatarMatthew,
    name: 'Matthew Harris',
    text: "Yes, it works! My family and I are doing this prayer together every night. We've already felt peace in our home.",
    likes: 4,
    time: '2 m',
  },
  {
    avatar: avatarJames,
    name: 'James Wilson',
    text: "I'm glad I stayed on this page… whoever doesn't watch this will truly regret it. This is powerful.",
    likes: 24,
    time: '23 m',
  },
  {
    avatar: avatarAshley,
    name: 'Ashley Davis',
    text: "I still can't believe it… I did this prayer and in the very first week, I received an unexpected financial blessing. Not lottery — but enough to help me breathe again. I can only give thanks 🙏",
    likes: 64,
    time: '35 m',
  },
  {
    avatar: avatarAmanda,
    name: 'Amanda Brown',
    text: "My mother was suffering with terrible leg pain… she could barely walk. After we started doing this prayer together, she's moving so much better now. She even walked outside today!",
    likes: 32,
    time: '41 m',
  },
  {
    avatar: avatarJessica,
    name: 'Jessica Williams',
    text: 'I almost closed the page, but something told me to stay… thank God I did. This touched me deeply.',
    likes: 65,
    time: '57 m',
  },
  {
    avatar: avatarSarah,
    name: 'Sarah Miller',
    text: "The pain I felt was unbearable… but as soon as I started the prayer Father John teaches, everything changed. Today, each prayer feels like a blessing being poured into my life. I can only thank God!",
    likes: 89,
    time: '1 h',
  },
];

const CommentItem = ({ comment }: { comment: Comment }) => (
  <div className="flex gap-3 py-3 border-b comment-border">
    <img
      src={comment.avatar}
      alt={comment.name}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-1 min-w-0">
      <p className="comment-name font-semibold text-sm">{comment.name}</p>
      <p className="text-sm mt-0.5 leading-snug">{comment.text}</p>
      <div className="flex items-center gap-1.5 mt-1.5 text-xs comment-action">
        <span className="font-semibold cursor-pointer hover:underline">Like</span>
        <span>·</span>
        <span className="font-semibold cursor-pointer hover:underline">Reply</span>
        <span>·</span>
        <img src={fbLike} alt="likes" className="w-4 h-4" />
        <span>{comment.likes}</span>
        <span>·</span>
        <span>{comment.time}</span>
      </div>
    </div>
  </div>
);

const CommentsSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 bg-card rounded-xl border border-border shadow-sm">
      <p className="text-sm font-semibold mb-3">
        Showing 9 of 663 comments
      </p>
      <div>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
      <div className="flex items-center gap-2 py-4 mt-2">
        <img src={fbLogo} alt="Facebook" className="w-5 h-5" />
        <span className="text-xs comment-action">Facebook Comments Plugin</span>
      </div>
    </div>
  );
};

export default CommentsSection;
