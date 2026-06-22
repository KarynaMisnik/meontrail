import { Text, View } from "react-native";

interface PostProps {
  post: {
    title: string;
    location: string;
    timestamp: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.location}</Text>
      <Text>{post.timestamp}</Text>
    </View>
  );
}
