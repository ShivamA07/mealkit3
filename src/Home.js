import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
} from "react-native-web";
import frenchFood from "/Users/shivam/mealkit3/src/french-food-1920x1080.jpg.webp";
import americanFood from "/Users/shivam/mealkit3/src/american.jpg";
import rice from "/Users/shivam/mealkit3/src/rice.jpg";
import siopao from "/Users/shivam/mealkit3/src/siopao.png";
import sandwich from "/Users/shivam/mealkit3/src/sandwich.jpg";
import noodles from "/Users/shivam/mealkit3/src/noodles.jpg";
import order from "/Users/shivam/mealkit3/src/order.png";
import meal from "/Users/shivam/mealkit3/src/orderNow.png";
import people from "/Users/shivam/mealkit3/src/people.png";
import recommend from "/Users/shivam/mealkit3/src/recommend.png";
function Home() {
  return (
    <>
      <View style={styles.MealBox}>
        <button type="button" class="btn" style={styles.MenuButton}>
          Menu
        </button>
        <button type="button" class="btn" style={styles.MenuButton1}>
          Account
        </button>
        <img src={meal} style={styles.mealImg} />
      </View>
      <TextInput
        style={styles.search}
        placeholder="What would you like to eat today?"
        keyboardType="numeric"
      />
      <View style={styles.imageView}>
        <img src={frenchFood} style={styles.OrderImage} />
      </View>
      <View>
        <img src={order} style={styles.order1} />
      </View>
      <View style={styles.imageView1}>
        <img src={americanFood} style={styles.OrderImage1} />
      </View>
      <View style={styles.recommendBox}>
        <img src={recommend} style={styles.recommends} />
      </View>
      <img src={rice} style={styles.img} />
      <img src={noodles} style={styles.img2} />
      <img src={siopao} style={styles.img3} />
      <img src={sandwich} style={styles.img4} />
      <View style={styles.ContactBox}>
        <Text style={styles.Contact}>Contact Us</Text>
      </View>
      <img src={people} style={styles.people} />
      <Text style={styles.contactName}>
        Shivam | Sophie | Advaith | Jayden | Justin{" "}
      </Text>
      <View style={styles.end}>
        <Text style={styles.endText}>Instagram</Text>
        <Text style={styles.endText}>FaceBook</Text>
        <Text style={styles.endText}>Twitter</Text>
        <Text style={styles.endText}>
          Copyright © 2023 MealFinger Pvt. All rights reserved.
        </Text>
        <Text style={styles.endText}>
          Privacy Policy | Terms of use | Sales Policy
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  MealBox: {
    width: 1680,
    height: 120,
    backgroundColor: "#CCFF8C",
  },
  Meal: {
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -15,
  },
  Finger: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  },
  fingerView: {
    marginTop: 10,
    height: 40,
    width: 400,
    marginLeft: 645,
  },
  OrderImage: {
    width: 500,
    height: 300,
    borderWidth: 10,
    marginLeft: 50,
    marginTop: 0,
    backgroundColor: "blue",
  },
  OrderImage1: {
    width: 500,
    height: 300,
    borderWidth: 10,
    marginLeft: -80,
    marginBottom: 0,
  },
  Contact: {
    fontSize: 50,
    fontWeight: "bold",
    color: "darkblue",
    textAlign: "center",
  },
  ContactBox: {
    marginTop: 200,
    borderWidth: 3,
    borderColor: "darkblue",
    width: 1680,
  },
  end: {
    alignItems: "center",
  },
  endText: {
    justifyContent: "center",
    opacity: 0.4,
    fontSize: 13,
  },
  contactName: {
    fontSize: 13,
    textAlign: "center",
    opacity: 0.5,
    fontWeight: "bold",
    marginLeft: window.innerWidth / 2 - 135,
  },
  MenuButton: {
    width: 100,
    fontSize: 20,
    backgroundColor: "#CCFF8C",
    fontWeight: "bold",
  },
  MenuButton1: {
    width: 100,
    fontSize: 20,
    backgroundColor: "#CCFF8C",
    fontWeight: "bold",
    marginLeft: 1570,
    marginTop: -40,
  },
  imageView: {
    backgroundColor: "#FFFFFF",
    width: 500,
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView1: {
    backgroundColor: "#FFFFFF",
    width: 500,
    marginTop: -415,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 1180,
  },
  search: {
    width: 300,
    height: 40,
    borderRadius: 5,
    borderWidth: 4,
    marginLeft: 700,
    marginTop: 100,
    fontOpacity: 10,
  },
  midImages: {
    width: 600,
    height: 100,
    marginTop: 400,
  },
  midImages1: {
    width: 600,
    height: 100,
    marginLeft: 500,
  },
  img: {
    marginTop: 50,
    width: 400,
    marginLeft: 500,
  },
  img2: {
    marginTop: 100,
    width: 350,
    marginLeft: 70,
    height: 400,
  },
  img3: {
    width: 350,
    marginTop: -10,
    marginLeft: 970,
  },
  img4: {
    width: 400,
    marginLeft: 500,
    marginTop: -400,
  },
  recommend: {
    fontSize: 60,
    fontWeight: "bold",
  },
  recommendBox: {
    backgroundColor: "#FFFFFF",
    width: 500,
    marginLeft: 630,
    marginTop: 120,
    height: 200,
  },
  order1: {
    width: 500,
    marginLeft: 585,
    marginTop: -250,
    backgroundColor: "#FFFFFF",
  },
  mealImg: {
    width: 300,
    marginLeft: 750,
  },
  people: {
    width: 700,
    paddingBottom: 40,
    marginLeft: 500,
    marginTop: 30,
  },
  recommends: { width: 500, marginTop: 0 },
});
export default Home;
