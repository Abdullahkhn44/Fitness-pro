import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';


export default function TabLayout() {

    const pathname = usePathname();

    return (


        <Tabs

            initialRouteName='index'
            screenOptions={{
                headerStyle: { backgroundColor: "#030712", },
                headerTitleStyle:{fontSize:25,fontWeight:'bold'},
                headerTintColor: "white",
                tabBarStyle: { backgroundColor: "#030712" ,height:60,},
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "#6b7280", // gray tone
                headerTitle: 'Runner Pro',
                tabBarActiveBackgroundColor: '#030712',
            

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