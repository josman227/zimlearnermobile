import React, { useRef } from 'react';
import { SafeAreaView, BackHandler, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  // Handle Android back button
  const handleBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBack);
    return () => BackHandler.removeEventListener("hardwareBackPress", handleBack);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://zimlearnerspot.co.zw' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});