import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from "../components/NewListingButton";
import routes from "./routes";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator screenOptions={{headerShown: false}}>
		<Tab.Screen
			name={routes.FEED}
			component={FeedNavigator}
			options={{
				tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons name="home" color={color} size={size} />
				)
			}}
		/>
		<Tab.Screen
			name={routes.LISTING_EDIT}
			component={ListingEditScreen}
			options={({navigation, route}) => ({
				tabBarButton: () => <NewListingButton onPress={()=> navigation.navigate('ListingEdit')} />,
				tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons
						name="plus-circle"
						color={color}
						size={size}
					/>
				)
			})}
		/>
		<Tab.Screen
			name={routes.ACCOUNT}
			component={AccountNavigator}
			options={{
				headerShown: false,
				tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons
						name="account"
						color={color}
						size={size}
					/>
				)
			}}
		/>
	</Tab.Navigator>
);
export default AppNavigator;
