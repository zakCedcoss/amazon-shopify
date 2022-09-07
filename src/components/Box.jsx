import { useState } from "react";
import { amazon } from "../../public/amazon";
import { shopify } from "../../public/shopify";

function Box({ id, components, handleComponent }) {
  const [amazonVal, setAmazonVal] = useState("");
  const [shopifyOpt, setShopifyOpt] = useState("");
  const [shopifyVal, setShopifyVal] = useState("");
  console.log(amazonVal, shopifyOpt, shopifyVal);

  const handleClick = () => {
    let newComponentList = components.filter((comp) => comp.id !== id);
    console.log(newComponentList);
    handleComponent(newComponentList);
    // we have to modify this value
    // setAmazonVal("");
    // setShopifyOpt("");
    // setShopifyVal("");
  };

  return (
    <div className="dropdowns">
      <select
        name="amazonAttribute"
        onChange={(e) => setAmazonVal(e.target.value)}
      >
        <option value="">Set Amazon Attribute</option>
        {Object.keys(amazon).map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {amazonVal && (
        <select
          name="shopifyAttribute"
          onChange={(e) => setShopifyOpt(e.target.value)}
        >
          <option value="">Set Shopify Attribute</option>
          <option value="custom">Set Custom</option>
          <option value="attribute">Set From Attribute</option>
        </select>
      )}
      {shopifyOpt === "attribute" && (
        <select
          name="setShopifyAttrib"
          onChange={(e) => setShopifyVal(e.target.value)}
        >
          <option value="">Set Shopify Attribute</option>
          {shopify.map((item, i) => {
            return (
              <option key={i} value={item.title}>
                {item.title}
              </option>
            );
          })}
        </select>
      )}
      {shopifyOpt === "custom" && (
        <input
          type="text"
          placeholder="Set Shopify Attribute"
          onChange={(e) => setShopifyVal(e.target.value)}
        />
      )}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Box;
