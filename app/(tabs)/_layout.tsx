import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';

/**
 * layout only runs once
 */
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          // This tab will no longer show up in the tab bar
          href: null,
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
