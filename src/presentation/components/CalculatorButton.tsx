import { Pressable, Text } from 'react-native';
import { styles, colors } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({ onPress, label, color = colors.darkGray, doubleSize = false, blackText = false }: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...styles.button,
            opacity: (pressed) ? 0.8 : 1,
            backgroundColor: color,
            width: (doubleSize) ? 180 : 80,
        })}
            onPress={() => onPress()}
        >
            <Text style={{
                ...styles.buttonText,
                color: (blackText) ? 'black' : 'white',
            }}>{label}</Text>
        </Pressable>
    );
}



