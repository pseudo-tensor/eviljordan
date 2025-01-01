import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import axios from 'axios'
import React, {useState} from 'react'
import { Button, Image, Platform, StyleSheet, TextInput } from 'react-native'

export default function HomeScreen() {

const [searchInput, setSearchInput]= useState('Enter your value');
const [result, setResult]= useState('No');

async function  FetchData(){
    if(!searchInput){
        alert("Please enter a search term");
        return;
        }
    const res=await axios.get('http://127.0.0.1:3000/api/'+searchInput);
    setResult(res.data);
    }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput
          value={searchInput}
          style={styles.input}
          onChangeText={setSearchInput}
        />
        <Button
          onPress={FetchData}
          title="Send Request"
          color="#242fd4"
          accessibilityLabel="Learn more about this not purple button"
        />
        <ThemedText style={styles.resultText}>
            {result}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    color: '#ffffff',
    borderColor: '#ffffff',
    height: 40,
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
})
