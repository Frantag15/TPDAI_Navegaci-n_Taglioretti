import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Stack3/Inicio';
import Detalles from '../screens/Stack3/Detalles';

const Stack = createNativeStackNavigator();

export default function Stack3Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}
