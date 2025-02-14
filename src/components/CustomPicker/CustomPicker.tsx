import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { colors } from "../../theme/colors";


interface Option {
  label: string;
  value: string;
}

interface CustomPickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: Option[];
}

export const CustomPicker: React.FC<CustomPickerProps> = ({
  selectedValue,
  onValueChange,
  options,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.selectedText}>
          {options.find((opt) => opt.value === selectedValue)?.label ||
            "Select an option"}
        </Text>
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={visible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    onValueChange(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: "center",
  },
  selectedText: {
    fontSize: 16,
    color: colors.text,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
  },
  optionButton: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
  closeButton: {
    padding: 12,
    alignItems: "center",
  },
  closeText: {
    fontSize: 16,
    color: colors.accent,
  },
});
