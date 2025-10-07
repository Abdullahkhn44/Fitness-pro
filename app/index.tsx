import { Link } from 'expo-router';
import '../global.css'

import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View className='flex-1 justify-center items-center bg-slate-900'>

      <Text className='font-semibold text-xl text-white '>This is index from expo routes!</Text>
    
   
      <Link className='w-40 h-14 bg-purple-600 text-center items-center justify-center rounded-2xl mt-5' href="/Settings"> <Text className='text-white text-lg'>Settings</Text></Link>
    </View>
  );
}



