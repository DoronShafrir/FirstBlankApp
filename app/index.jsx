console.log("INDEX.JSX IS RUNNING");
import { Text, StyleSheet } from 'react-native';
import BookShelf from '../assets/img/bookshelves.png';
import { Link } from 'expo-router';
// themed cmponents
import ThemedView from '../components/ThemedView.jsx';
import ThemedLogo from '../components/ThemedLogo.jsx';
import ThemedText from '../components/ThemedText.jsx';

import Spacer from '../components/Spacer.jsx';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={[styles.title, { color: 'red' }]} title={true} >
        The number 1</ThemedText>
      <Spacer height={10} />
      <ThemedText title={true}>Reading List App</ThemedText>

      <Text style={styles.card}>This is a card view</Text>

      <Link href="/login" ><ThemedText>Login Page </ThemedText></Link>
      <Link href="/register" style={styles.link}><ThemedText>Register Page </ThemedText></Link>

      <Link href="/(dashboard)/profile" style={styles.link}><ThemedText>Profile Page </ThemedText></Link>
    </ThemedView>
  )

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {

    backgroundColor: '#e0e0e0',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    boxShadow: '4px 4px  rgba(0, 0, 0, 0.1)',
  },
  img: {
    width: 200,
    height: 400,
  },
  link: {
    color: 'red',
    marginVertical: 5,
    borderbottomWidth: 3,
    borderbottomColor: 'red',
  }
});