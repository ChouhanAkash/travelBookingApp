import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
const { width } = Dimensions.get("window");
const destinations = [
  { id: "1", place: "Maldives", img: "https://picsum.photos/400/300?random=3" },
  { id: "2", place: "Switzerland", img: "https://picsum.photos/400/300?random=4" },
  { id: "3", place: "Dubai", img: "https://picsum.photos/400/300?random=5" },
  { id: "4", place: "Bali", img: "https://picsum.photos/400/300?random=6" },
  { id: "5", place: "Paris", img: "https://picsum.photos/400/300?random=7" },
];

const DestinationCard = ({ item, index, scrollY }) => {
  const inputRange = [-1, 0, 180 * index, 180 * (index + 2)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.9],
  });
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.7],
  });

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }], opacity }]}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.place}</Text>
      </View>
    </Animated.View>
  );
};

export default function ExploreScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      <Animated.FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => (
          <DestinationCard item={item} index={index} scrollY={scrollY} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = 180;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", paddingTop: 20 },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 20,
    marginTop:20,
    marginBottom: 20,
    color: "#333",
  },
  listContent: { paddingBottom: 20 },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 18,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 6,
    overflow: "hidden",
  },
  img: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  text: { color: "#fff", fontSize: 20, fontWeight: "700" },
});
