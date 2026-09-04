import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [pressed, setPPressed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Hola a todos</Text>
        {pressed && <Text style={styles.message}>Usted presionó el botón</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPPressed(true)}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  message: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
