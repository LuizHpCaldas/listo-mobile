import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { useList } from "../hooks/useList";
import ProductItem from "../components/ProductItem";
import Icon from "react-native-vector-icons/Feather";

export default function ListDetailScreen({ route }) {
  const { listId } = route.params;
  const { list, addProduct, updateProduct, deleteProduct } = useList(listId);
  const [newProductName, setNewProductName] = useState("");

  const handleAddProduct = () => {
    if (newProductName.trim()) {
      addProduct(newProductName);
      setNewProductName("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{list?.name}</Text>
        <Text style={styles.subtitle}>
          {list?.items.filter((i) => i.inCart).length}/{list?.items.length}{" "}
          itens • R$ {list?.total.toFixed(2)}
        </Text>
      </View>

      <ScrollView style={styles.itemsContainer}>
        {list?.items.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onToggleCart={updateProduct}
            onDelete={deleteProduct}
          />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar produto..."
          value={newProductName}
          onChangeText={setNewProductName}
          onSubmitEditing={handleAddProduct}
          returnKeyType="done"
        />
        <Pressable onPress={handleAddProduct} style={styles.addButton}>
          <Icon name="plus" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
