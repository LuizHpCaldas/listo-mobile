import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useLists } from "../hooks/useLists";
import ListItem from "../components/ListItem";
import FloatingActionButton from "../components/FloatingActionButton";

export default function HomeScreen({ navigation }) {
  const { lists, loading, error } = useLists();
  const { logout } = useAuth();

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorView error={error} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            list={item}
            onPress={() =>
              navigation.navigate("ListDetail", { listId: item.id })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
      />

      <FloatingActionButton
        onPress={() => navigation.navigate("NewList")}
        icon="plus"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
  },
  listContent: {
    padding: 16,
  },
});
