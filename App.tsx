import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import List from './app/screens/List';
import Details from './app/screens/Details';


export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator>
            <Stack.Screen name="My Todos" component={List} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
</NavigationContainer>
  );
}
