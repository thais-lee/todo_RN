import * as React from 'react'

import BottomTab from './bottom-tab'
import { NavigationContainer } from '@react-navigation/native'

const Navigator =  ()=> {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    )
}

export default Navigator;
