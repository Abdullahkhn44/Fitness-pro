import '../global.css'
import { Stack } from "expo-router";



export default  function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{title:'Home'}}/>
            <Stack.Screen name="Settings" options={{title:'Settings'}}/>
            <Stack.Screen name="Products" options={{title:'Products'}}/>
        </Stack>
    )
}