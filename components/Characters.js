import { ScrollView, Text, Image, StyleSheet } from "react-native";

const Characters = () => {
  return (
    <ScrollView style={{ marginTop: 300 }}>
      <Text style={styles.titleText}>Characters</Text>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      ></Image>
      <Text>Dr. Eli Gemstones</Text>
      <Image
        source={{
          uri: "https://tv-fanatic-res.cloudinary.com/iu/s--aCmwEXXd--/f_auto,q_auto/v1565656862/jesse-gemstone",
        }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      ></Image>
      <Text>Jesse Gemstone</Text>
      <Image
        source={{
          uri: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F08%2Frighteous-gemstones_4-2000.jpg",
        }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      ></Image>
      <Text>Kelvin Gemstone</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyG3XmoZMt5LqLnVIjZ418ttPZTsN6kDK67Q&usqp=CAU",
        }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      ></Image>
      <Text>Judy Gemstone</Text>
      <Image
        source={{
          uri: "https://preview.redd.it/bmijpyifwh751.jpg?auto=webp&s=4da84e73458858aa6ab67e2859ad7f55f5e2d6a7",
        }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      ></Image>
      <Text>Baby Billy</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Characters;
