import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import CardComp from './Components/CardComp';

export default function App() {
  return (
    <View style={{marginTop:20}}>
      <Search/>
      {/* <StatusBar style="auto" /> */}
      <CardComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:10
  },
});
