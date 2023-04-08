import React from "react"
import MainRoute from './MainRoute'

import { createStackNavigator } from "@react-navigation/stack"

const Drawer = createStackNavigator()

export default () => (
    <Drawer.Navigator
        drawerType={'slide'}
        keyboardDismissMode={'none'}
        initialRouteName={"MainRoute"}
        overlayColor={'rgba(1,1,1,.8)'}
    >
        <Drawer.Screen name={'MainRoute'} component={MainRoute}/>
    </Drawer.Navigator>
)