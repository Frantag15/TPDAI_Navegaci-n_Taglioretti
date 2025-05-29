import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Stack2/Inicio';
import Detalles from '../screens/Stack2/Detalles';

const Stack = createNativeStackNavigator();

export default function Stack2Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}
