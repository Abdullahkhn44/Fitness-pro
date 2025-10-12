import { router, Stack } from "expo-router";



export default function Layout() {
    return (

        <Stack >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="Cart" options={{ title: 'Cart' }} />
        </Stack>
    )
}