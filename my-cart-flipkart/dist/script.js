function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}let count = 0;

let delDetails = "FREE";
let TotalAmount = 0;
const hideShowContent = {
  display: "none" };

const emptyCart = {
  textAlign: "center",
  color: "gray" };

const hideShowEmpty = {
  height: "250px",
  // width:"740px",
  marginTop: "-20px",
  marginLeft: "40px",
  backgroundColor: "white",
  // boxShadow:"1px 0px 1px black",
  display: "block" };

const cartHead = {
  height: "55px",
  width: "100%",
  paddingLeft: "300px",
  backgroundColor: "#2874f0",
  color: "white",
  fontSize: "20px",
  fontStyle: "italic",
  fontWeight: "bold",
  lineHeight: "50px",
  boxShadow: "0px 0px 5px black" };

const adjustContent = {
  marginLeft: "20px",
  marginTop: "-10px" };

const shoe = {
  width: "180px",
  color: "black",
  position: "relative",
  top: "-90px",
  left: "157px" };

const buyItem = {
  position: "relative",
  top: "-90px",
  left: "160px",
  backgroundColor: "#fb641b",
  color: "white",
  border: "none",
  padding: "15px 30px" };

const itemMargin = {
  marginTop: "-70px" };



class Cart extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { counter: 0 });_defineProperty(this, "CartNumbers",
    (iImage, iInfo, iDetail, sDetail, pr, pDisc, discPer, off) => {
      this.setState({ counter: this.state.counter + 1 });
      let itemListed = document.querySelector("#showItems");
      itemListed.innerHTML = `
      <img style = {{margin:"0px 0px 0px 30px"}} id = "iImg" src = "https://rukminim1.flixcart.com/image/224/224/jg2kqkw0/vehicle-washing-cloth/w/v/f/double-sided-microfiber-gloves-2-units-auto-hub-original-imaf4ec5k6rrgp65.jpeg?q=90" />   
          <button id = "minusBtn">-</button>
          <input type = "text" id = "NoOfItems"value = "1"/>
          <button id = "plusBtn">+</button>
          <a href = "#lol" id = "itemInfo">Auto Hub Microfiber Vehicle Washin...</a>
          <h4 id = "ItemDetail">Pack Of 2</h4>
          <h5 id = "sellerDetail">Seller: ASTRADERS</h5>
          <div id = "Price">₹193 <span id = "discount"> ₹499</span><span id = "discountPercent">61% Off</span><span id = "offers">2 offers available</span></div>
          <button id = "saveforlater">SAVE FOR LATER</button>
          <button id = "remove">REMOVE</button>
          
          <div class="sideInfo">Delivery in 5 - 7 days | 
            <span class="Free"> Free</span>
            <span class="freeDelivery"> ₹40</span> 
            <div id = "replacementPolicy">7 Days Replacement Policy</div>
          </div>
      `;
    });}
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { style: cartHead },
      React.createElement("div", { class: "titleName" }, "Flipkart",
      React.createElement("input", { type: "text", placeholder: "Search for products, brands and more", id: "searchbar" }),
      React.createElement("i", { class: "material-icons" }, "search"),
      React.createElement("div", { class: "accountInformation" }, "My Account"), React.createElement("i", { class: "material-icons", id: "expandMore" }, "expand_more"))),


      React.createElement("div", { class: "itemsContent" },
      React.createElement("div", { class: "boxText" }, "My Cart(",
      this.state.counter, ")"),

      React.createElement("i", { class: "material-icons", id: "locationOn" }, "location_on"),
      React.createElement("div", { id: "deliverTo" }, "Deliver to"),
      React.createElement("input", { type: "text ", id: "pincode", placeholder: "Enter delivery pincode" }),
      React.createElement("button", { id: "VerifyPincode" }, "Check"),
      React.createElement("div", { id: "showItems", style: hideShowEmpty },
      React.createElement("h3", { style: emptyCart }, "Looks like your cart is empty."))),


      React.createElement("div", { id: "order" },
      React.createElement("button", { id: "placeOrder" }, "PLACE ORDER"),
      React.createElement("div", { id: "sideAmountBox" }, "PRICE DETAILS",

      React.createElement("div", { id: "totalItemsCount" }, "Price (", this.state.counter, " Items) ", React.createElement("span", { id: "priceAmount" }, TotalAmount)),
      React.createElement("div", { id: "deliveryDetail" }, React.createElement("span", { id: "deliveryCharges" }, "Delivery Charges"), delDetails),
      React.createElement("div", { id: "totalAmount" }, React.createElement("span", { id: "totalAmt" }, "TOTAL"), TotalAmount),
      React.createElement("div", { id: "itemsList" }))),


      React.createElement("div", { id: "sideItemsListBox" },
      React.createElement("div", { id: "ItemsShoes" },
      React.createElement("img", { src: "https://rukminim1.flixcart.com/image/224/224/k6nxrbk0/shoe/k/h/n/mrj1241-6-aadi-black-original-imafp2hytr9nguv5.jpeg?q=90" }),
      React.createElement("div", { style: adjustContent },
      React.createElement("div", { style: shoe }, "Aadi Casuals For Men"),
      React.createElement("h5", { id: "sellerDetail" }, "Seller: PrideShoes"),
      React.createElement("div", { id: "Price" }, "\u20B9374 ", React.createElement("span", { id: "discount" }, " \u20B9999"), React.createElement("span", { id: "discountPercent" }, "62% Off")),

      React.createElement("button", { style: buyItem, id: "Shoe", onClick: this.CartNumbers }, "ADD TO CART"))),


      React.createElement("div", { id: "ItemsBags", style: itemMargin },
      React.createElement("img", { src: "https://rukminim1.flixcart.com/image/224/224/jrf8o7k0/hand-messenger-bag/a/h/3/fashion-shoulder-bag-pg-10-shoulder-bag-urban-trend-original-imaexs9wmanzw6hh.jpeg?q=90" }),
      React.createElement("div", { style: adjustContent },
      React.createElement("div", { style: shoe }, "Urban Trend Women Blue Shoulder Bag"),
      React.createElement("h5", { id: "sellerDetail" }, "Seller: ABRETAILSTORE"),
      React.createElement("div", { id: "Price" }, "\u20B9271 ", React.createElement("span", { id: "discount" }, " \u20B9999"), React.createElement("span", { id: "discountPercent" }, "72% Off")),

      React.createElement("button", { style: buyItem, id: "Shoe", onClick: this.CartNumbers }, "ADD TO CART"))),


      React.createElement("div", { id: "ItemsShirt", style: itemMargin },
      React.createElement("img", { src: "https://rukminim1.flixcart.com/image/224/224/kfoapow0-0/t-shirt/r/l/a/xxl-fc4070-fastcolors-original-imafw2jymrdyxcs2.jpeg?q=90" }),
      React.createElement("div", { style: adjustContent },
      React.createElement("div", { style: shoe }, "FastColors Striped Men Round Neck White"),
      React.createElement("h5", { id: "sellerDetail" }, "Seller: FastColors"),
      React.createElement("div", { id: "Price" }, "\u20B9371 ", React.createElement("span", { id: "discount" }, " \u20B91,999"), React.createElement("span", { id: "discountPercent" }, "81% Off")),

      React.createElement("button", { style: buyItem, id: "Shoe", onClick: this.CartNumbers }, "ADD TO CART"))),


      React.createElement("div", { id: "ItemsDuster", style: itemMargin },
      React.createElement("img", { src: "https://rukminim1.flixcart.com/image/224/224/jg2kqkw0/vehicle-washing-cloth/w/v/f/double-sided-microfiber-gloves-2-units-auto-hub-original-imaf4ec5k6rrgp65.jpeg?q=90" }),
      React.createElement("div", { style: adjustContent },
      React.createElement("div", { style: shoe }, "Auto Hub Microfiber Vehicle Washing"),
      React.createElement("h5", { id: "sellerDetail" }, "Seller: ASTRADERS"),
      React.createElement("div", { id: "Price" }, "\u20B9194 ", React.createElement("span", { id: "discount" }, " \u20B9499"), React.createElement("span", { id: "discountPercent" }, "61% Off")),

      React.createElement("button", { style: buyItem, id: "Shoe", onClick: this.CartNumbers }, "ADD TO CART"))))));





  }}


ReactDOM.render(
React.createElement(Cart, null),
document.getElementById('root'));