// let count = 0
let counter = 0;
let delDetails = "FREE";
let TotalAmount = 0;

class Cart extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "cartHead" },
      React.createElement("div", { class: "titleName" }, "Flipkart",
      React.createElement("input", { type: "text", placeholder: "Search for products, brands and more", id: "searchbar" }),
      React.createElement("i", { class: "material-icons" }, "search"),
      React.createElement("div", { class: "accountInformation" }, "My Account"), React.createElement("i", { class: "material-icons", id: "expandMore" }, "expand_more"))),


      React.createElement("div", { class: "itemsContent" },
      React.createElement("div", { class: "boxText" }, "My Cart(",
      counter, ")"),

      React.createElement("i", { class: "material-icons", id: "locationOn" }, "location_on"),
      React.createElement("div", { id: "deliverTo" }, "Deliver to"),
      React.createElement("input", { type: "text ", id: "pincode", placeholder: "Enter delivery pincode" }),
      React.createElement("button", { id: "VerifyPincode" }, "Check"),
      React.createElement("hr", null),
      React.createElement("img", { class: "itemImg", src: "https://rukminim1.flixcart.com/image/224/224/jg2kqkw0/vehicle-washing-cloth/w/v/f/double-sided-microfiber-gloves-2-units-auto-hub-original-imaf4ec5k6rrgp65.jpeg?q=90" }),
      React.createElement("button", { id: "minusBtn" }, "-"),
      React.createElement("input", { type: "text", id: "NoOfItems", value: "1" }),
      React.createElement("button", { id: "plusBtn" }, "+"),
      React.createElement("a", { href: "#lol", id: "itemInfo" }, "Auto Hub Microfiber Vehicle Washin..."),
      React.createElement("h4", { id: "ItemDetail" }, "Pack Of 2"),
      React.createElement("h5", { id: "sellerDetail" }, "Seller: ASTRADERS"),
      React.createElement("div", { id: "Price" }, "\u20B9193 ", React.createElement("span", { id: "discount" }, " \u20B9499"), React.createElement("span", { id: "discountPercent" }, "61% Off"), React.createElement("span", { id: "offers" }, "2 offers available")),
      React.createElement("button", { id: "saveforlater" }, "SAVE FOR LATER"),
      React.createElement("button", { id: "remove" }, "REMOVE"),

      React.createElement("div", { class: "sideInfo" }, "Delivery in 5 - 7 days |",
      React.createElement("span", { class: "Free" }, " Free"),
      React.createElement("span", { class: "freeDelivery" }, " \u20B940"),
      React.createElement("div", { id: "replacementPolicy" }, "7 Days Replacement Policy"))),


      React.createElement("div", { id: "order" },
      React.createElement("button", { id: "placeOrder" }, "PLACE ORDER"),
      React.createElement("div", { id: "sideItemsListBox" }, "PRICE DETAILS",

      React.createElement("div", { id: "totalItemsCount" }, "Price (", counter, " Items) ", React.createElement("span", { id: "priceAmount" }, TotalAmount)),
      React.createElement("div", { id: "deliveryDetail" }, React.createElement("span", { id: "deliveryCharges" }, "Delivery Charges"), delDetails),
      React.createElement("div", { id: "totalAmount" }, React.createElement("span", { id: "totalAmt" }, "TOTAL"), TotalAmount),
      React.createElement("div", { id: "itemsList" })))));




  }}


ReactDOM.render(
React.createElement(Cart, null),
document.getElementById('root'));