import React from 'react';
import { Tabs, usePathname, useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../hooks';


export default function TabLayout() {

    const pathname = usePathname();
    const router = useRouter();

    const cartCount = useAppSelector((state) => state.cart.value.length)


    return (


        <Tabs

            initialRouteName='index'
            screenOptions={{
                headerStyle: { backgroundColor: "#030712", },
                headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
                headerTintColor: "white",
                tabBarStyle: { backgroundColor: "#030712", height: 60, },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "#6b7280", // gray tone
                headerTitle: 'Runner Pro',
                tabBarActiveBackgroundColor: '#030712',
                headerRight: () => (
                    <TouchableOpacity onPress={() => router.navigate('/Cart')}>

                        <View style={{ marginRight: 18, position: 'relative' }}>
                            <Feather size={24} name='shopping-cart' color={'white'} />

                            {/* Badge */}

                            {cartCount > 0 && (
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -6,
                                        right: -6,
                                        backgroundColor: 'red',
                                        width: 18,
                                        height: 18,
                                        borderRadius: 9,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >

                                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                                        {cartCount}
                                    </Text>
                                </View>
                            )}

                        </View>

                    </TouchableOpacity>

                )
                ,


            }}>

            <Tabs.Screen
                name="Settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Feather size={28} name="settings" color="white" />,
                    tabBarLabel: pathname === "/Settings" ? "Settings" : " ",

                }}
            />
            <Tabs.Screen

                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Feather size={28} name="home" color="white" />,
                    tabBarLabel: pathname === "/" ? "Home" : " ",

                }}
            />
            <Tabs.Screen
                name="Products"
                options={{
                    title: 'Products',
                    tabBarIcon: ({ color }) => <Feather size={28} name="shopping-bag" color="white" />,
                    tabBarLabel: pathname === "/Products" ? "Products" : " ",

                }}
            />
        </Tabs>

    );
}