import React from "react";

import { Container, Label } from "./styles";

interface Props {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({
  label,
  onPress,
  backgroundColor,
  textColor,
}) => {
  return (
    <Container
      activeOpacity={0.7}
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <Label textColor={textColor}>{label}</Label>
    </Container>
  );
};

export default Button;
