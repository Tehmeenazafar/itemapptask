import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './homestack'
const MainNav: FC = () => {

    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default MainNav;