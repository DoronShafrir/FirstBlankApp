import { StyleSheet, Text, View, Images } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>
        Go to Index Page
      </Link>
    </View>
  )
}


export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  card:{
    
    backgroundColor: '#e0e0e0',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    boxShadow: '4px 4px  rgba(0, 0, 0, 0.1)',
  },
  img:     {
        width: 200,
        height: 400,
  },
   link: {
    color: 'red',
    marginVertical: 15,
    border: 3,
   
  }
});