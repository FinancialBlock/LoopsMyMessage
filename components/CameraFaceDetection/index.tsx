import * as FaceDetector from 'expo-face-detector';
import{Camera} from "expo-camera";

<Camera
    // ... other props
    onFacesDetected={this.handleFacesDetected}
    faceDetectorSettings={{
        mode: FaceDetector.Constants.Mode.fast,
        detectLandmarks: FaceDetector.Constants.Landmarks.none,
        runClassifications: FaceDetector.Constants.Classifications.none,
        minDetectionInterval: 100,
        tracking: true,
    }}
/>;
