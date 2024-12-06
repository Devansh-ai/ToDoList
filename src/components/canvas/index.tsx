import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, TouchableOpacity, Text } from 'react-native';
import ViewShot from 'react-native-view-shot';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../utils/color';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface CanvasDrawingProps {
  onSave: (uri: string) => void;
  onClose: () => void;
}

const CanvasDrawing: React.FC<CanvasDrawingProps> = ({ onSave, onClose }) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');
  const viewShotRef = useRef<any>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      const { locationX, locationY } = event.nativeEvent;
      setCurrentPath(`M ${locationX} ${locationY}`);
    },
    onPanResponderMove: (event) => {
      const { locationX, locationY } = event.nativeEvent;
      setCurrentPath(prevPath => `${prevPath} L ${locationX} ${locationY}`);
    },
    onPanResponderRelease: () => {
      setPaths(prevPaths => [...prevPaths, currentPath]);
      setCurrentPath('');
    },
  });

  const handleClear = () => {
    setPaths([]);
    setCurrentPath('');
  };

  const handleSave = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      onSave(uri);
      onClose();
    } catch (error) {
      console.error('Error saving canvas:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} style={styles.canvasContainer}>
        <View style={styles.canvas} {...panResponder.panHandlers}>
          <Svg height="100%" width="100%">
            {paths.map((path, index) => (
              <Path
                key={index}
                d={path}
                stroke="black"
                strokeWidth={2}
                fill="none"
              />
            ))}
            {currentPath ? (
              <Path
                d={currentPath}
                stroke="black"
                strokeWidth={2}
                fill="none"
              />
            ) : null}
          </Svg>
        </View>
      </ViewShot>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  canvas: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: colors.secondaryBg,
    padding: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'500',
  },
});

export default CanvasDrawing;