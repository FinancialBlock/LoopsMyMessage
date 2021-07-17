import React, {useEffect} from "react";
import {useState} from "react";
import {
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"


import { useRoute } from '@react-navigation/native';
import {FleetType, User} from "../../types";


const FleetScreen = () => {
    const route = useRoute();
    const { userId } = route.params;

    const [user, setUser] = useState<null|User>(userWithFleets.find(u => u.id === userId ));
    const [fleetIndex, setFleetIndex] = useState(0);
    const [fleet, setFleet] = useState<null|FleetType>(user?.fleets?.items[0])

    useEffect(()=> {

        setFleet(user?.fleets?.items[fleetIndex])
    },[fleetIndex])

    const goToNextFleet = ()  => {
        setFleetIndex(fleetIndex + 1);
    }

    const goToPrevFleet= () => {
        console.warn('Prev file');
    }

    return(

                <FleetView
                    user={user}
                    fleet={fleet}
                    goToNextFleet={goToNextFleet}
                    goToPrevFleet={goToPrevFleet}
                    />


    )
}

export default FleetScreen;
