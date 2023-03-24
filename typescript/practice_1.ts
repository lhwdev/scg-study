
type UserId = number;
type UserRole = "admin" | "professor" | "student"

interface User {
  id: UserId;
  name: string;
  role: UserRole;
}

type UserTarget = User; // for further modification

type UserList = PaginatedList<User>;

type PostId = number;

interface Post {
  id: PostId;

  title: string;
  content: string;
  author: UserTarget;

  isAnnouncement?: boolean;
}

type PostList = PaginatedList<Post>;

interface PaginatedList<T> {
  timestamp: Date;
  pageCount: number;
  pageIndex: number;
  content: T[];
}
