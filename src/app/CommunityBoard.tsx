import { FlatList } from "react-native";
import Post from "../components/Post";
import { posts } from "../data/posts";

export default function CommunityBoard() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
}
