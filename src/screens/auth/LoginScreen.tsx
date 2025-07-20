import { View, Text, TextInput, Pressable } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <Pressable
        onPress={handleLogin}
        style={{ padding: 15, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 10 }}
      >
        <Text style={{ textAlign: "center" }}>Create new account</Text>
      </Pressable>
    </View>
  );
}
