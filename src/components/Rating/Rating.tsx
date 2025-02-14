import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";
import { colors } from "../../theme/colors";

interface RatingProps {
  value: number;
  max?: number;
}

export const Rating = ({ value, max = 5 }: RatingProps) => {
  const stars = Array.from({ length: max }, (_, i) => i < value);

  return (
    <View style={styles.container}>
      {stars.map((filled, index) => (
        <Icon
          key={index}
          name={filled ? "star" : "star-border"}
          size={16}
          color={filled ? colors.starFilled : colors.starEmpty}
        />
      ))}
      <Text style={styles.text}>{value.toFixed(1)}</Text>
    </View>
  );
};
