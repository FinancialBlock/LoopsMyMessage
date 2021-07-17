import React from 'react';
import { Image } from 'react-native';

export type FleetProfileProps = {
    image?: string,
    size?: number,
}

const FleetProfile = ({image, size = 50}: FleetProfileProps) => (
    <Image
        source={{ uri: image || '' }}
        style={{
            width: 70,
            height: 80,
            marginTop: 10,
            borderRadius: 30,
            padding: 15,
            borderWidth: 3,
            borderColor: '#449bd4',
        }}
    />
)

export default FleetProfile;
