import { View, Text } from 'react-native';

export default function HomeScreen(){
    return (
        <View 
          style={{ flex: 1, alignItems: 'center', 
              justifyContent: 'center' 
              }}>
          <Text>Home Screen</Text>
          <Text>Kami Dari kelompok 5</Text>
          <Text>Beranggota</Text>
          <Text>Arifin,Jabal,Husein,Rizky</Text>
        </View>
      );
}