import {
    StyleSheet,
    StatusBar,
    View,
    SafeAreaView,
    StatusBarProps,
  } from "react-native";
  import React from "react";
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from "../../constants/dimensions";
import { colors } from "../../theme/colors";
  
  interface MyStatusBarProps extends StatusBarProps {
    backgroundColor?: string;
  }
  
  export const MyStatusBar: React.FC<MyStatusBarProps> = ({
    backgroundColor,
    ...props
  }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  
  const styles = StyleSheet.create({
    statusBar: {
      height: STATUSBAR_HEIGHT
    },
    appBar: {
      backgroundColor: colors.background,
      height: APPBAR_HEIGHT,
    },
  });
  