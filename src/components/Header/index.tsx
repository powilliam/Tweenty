import React, { useMemo } from "react";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

import styles from "./styles";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const theme = useTheme();

  const backgroundColor = useMemo(() => theme.colors.card, [theme]);
  const textColor = useMemo(() => theme.colors.text, [theme]);

  return (
    <Appbar style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </Appbar>
  );
};

export default Header;
