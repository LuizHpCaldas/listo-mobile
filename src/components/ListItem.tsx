import { View, Text, TouchableOpacity } from "react-native";

export default function ListItem({ list, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#1e293b",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 4,
            height: 40,
            backgroundColor: "#7c3aed",
            marginRight: 12,
            borderRadius: 2,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            {list.name}
          </Text>
          <Text style={{ color: "#94a3b8", fontSize: 14 }}>
            {list.items.filter((i) => i.inCart).length}/{list.items.length}{" "}
            itens
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
