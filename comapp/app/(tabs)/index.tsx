import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Tela inicial (Início)
const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Bem-vindo(a) ao App da Comunidade!</Text>
    <Text style={styles.paragraph}>
      Aqui você encontra informações, eventos culturais, e oportunidades de colaborar com a comunidade.
    </Text>
  </ScrollView>
);

// Tela de Eventos
const EventsScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Eventos Culturais</Text>
    <Text style={styles.paragraph}>
      - Feira Cultural: 10 de Dezembro às 15h no Centro Comunitário.
    </Text>
    <Text style={styles.paragraph}>
      - Oficina de Dança Regional: 12 de Dezembro às 18h no Ginásio.
    </Text>
  </ScrollView>
);

// Tela de Doações
const DonationsScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Área de Doações</Text>
    <TextInput style={styles.input} placeholder="Digite o que você deseja doar" />
    <Button title="Registrar Doação" onPress={() => alert('Doação registrada!')} />
  </ScrollView>
);

// Tela de Informações
const InfoScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Informações Úteis</Text>
    <Text style={styles.paragraph}>
      - Cursos gratuitos: www.cursoscomunidade.com
    </Text>
    <Text style={styles.paragraph}>
      - Dicas culturais: www.culturaviva.com
    </Text>
  </ScrollView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Eventos') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Doações') {
              iconName = focused ? 'gift' : 'gift-outline';
            } else if (route.name === 'Informações') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#42a5f5',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Eventos" component={EventsScreen} />
        <Tab.Screen name="Doações" component={DonationsScreen} />
        <Tab.Screen name="Informações" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
