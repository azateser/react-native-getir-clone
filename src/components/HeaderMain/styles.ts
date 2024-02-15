import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height * 0.064,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    height: height * 0.064,
    width: width*0.8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: '3%',
    borderTopRightRadius:  12,
    borderBottomRightRadius:  12,
    justifyContent: "space-between",
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2,
    paddingLeft: 8,
  },
  headerTwo: {
    width: width*0.2,
    height: height * 0.064,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    },
});

export default styles;
