import { Fontisto, FontAwesome5Brands, FontAwesome } from "@expo/vector-icons";
export const Cards = [
  {
    logo: require("./assets/images/visa_logo.png"),
    type: "mastercard",
    number: "****_****_**** 5168",
    ccv: "10/20",
    balance: "$1,000.00",
  },
  {
    logo: require("./assets/images/visa_logo_white.png"),
    type: "mastercard",
    number: "****_****_**** 2171",
    ccv: "10/20",
    balance: "$2,963.00",
  },
  {
    logo: require("./assets/images/visa_logo_white.png"),
    type: "mastercard",
    number: "****_****_**** 9988",
    ccv: "10/20",
    balance: "$54,704.99",
  },
  {
    logo: require("./assets/images/visa_logo_white.png"),
    type: "mastercard",
    number: "****_****_**** 1678",
    ccv: "10/20",
    balance: "$100.00",
  },
];

export const Overview = [
  {
    label: "total transactions",
    amount: "$100,000.00",
    type: "inc",
    percentage: "+2.56%",
    date: "10 mar - 12 dec",
  },
  {
    label: "total sales",
    amount: "$29,999.00",
    type: "exp",
    percentage: "-1.56%",
    date: "10 apr - 12 jun",
  },
  {
    label: "total purchases",
    amount: "$1,000.00",
    type: "inc",
    percentage: "+2.56%",
    date: "10 mar - 12 dec",
  },
];

export const Transactions = [
  {
    title: "tinder",
    amount: "$100.00",
    type: "exp",
    date: "20 september 2022 at 4:20am",
    vectorName: "tint",
    accountType: "membership",
  },
  {
    title: "buy sellads",
    amount: "$100.00",
    type: "inc",
    vectorName: "buysellads",
    date: "20 september 2022 at 4:20am",
  },
  {
    title: "spotify",
    amount: "$22,356.00",
    type: "inc",
    date: "18 september 2022 at 4:20am",
    vectorName: "spotify",
    accountType: "membership",
  },
  {
    title: "google",
    amount: "$54,100.00",
    type: "exp",
    date: "20 september 2022 at 4:20am",
    vectorName: "google",
    accountType: "membership",
  },
  {
    title: "twitter",
    amount: "$788,800.00",
    type: "inc",
    date: "18 september 2022 at 4:20am",
    vectorName: "google",
    vectorIcon: "FontAwesome5Brands",
  },
];
