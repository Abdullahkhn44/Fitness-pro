import { router, Stack } from "expo-router";
import { store } from './redux/store'
import { Provider } from 'react-redux'


export default function Layout() {
    return (
        <Provider store={store}>
            <Stack >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="Cart" options={{ title: 'Cart', headerShown: false }} />
                <Stack.Screen name="productDetail" options={{ headerShown: false }} />

            </Stack>
        </Provider>
    )
}