import { useEffect, useState } from "react";
import { amazon } from "../../public/amazon";
import { shopify } from "../../public/shopify";

function Box({ id, components, handleComponent }) {
  const [amazonVal, setAmazonVal] = useState("");
  const [shopifyOpt, setShopifyOpt] = useState("");
  const [shopifyVal, setShopifyVal] = useState("");

  useEffect(() => {
    let found = components.find((item) => item.id === id);
    const newVal = { ...found, amazonVal, shopifyOpt, shopifyVal };
    let newComponentList = components.map((element) => {
      if (element.id === id) {
        return { ...element, ...newVal };
      }
      return { ...element };
    });
    handleComponent(newComponentList);
  }, [amazonVal, shopifyOpt, shopifyVal]);

  const handleDisable = (option) => {
    const foundIdx = components.findIndex((item) => item.amazonVal === option);
    // console.log(foundIdx);
    return foundIdx;
  };

  const handleClick = () => {
    let newComponentList = components.filter((comp) => comp.id !== id);
    handleComponent(newComponentList);
  };

  return (
    <div className="dropdowns">
      <button className="delete" onClick={handleClick}>
        Delete
      </button>
      <div className="one-section">
        <div className="select">
          <p>Amazon Attribute *</p>
          <select
            name="amazonAttribute"
            onChange={(e) => setAmazonVal(e.target.value)}
          >
            <option value="" disabled selected>
              Set Amazon Attribute
            </option>
            {Object.keys(amazon).map((item, i) => {
              return (
                <option
                  key={i}
                  value={item}
                  disabled={handleDisable(item) ? false : true}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {amazonVal && (
          <div className="select">
            <p>Shopify Attribute</p>
            <select
              name="shopifyAttribute"
              onChange={(e) => setShopifyOpt(e.target.value)}
            >
              <option value="" disabled selected>
                Set Shopify Attribute
              </option>
              <option value="custom">Set Custom</option>
              <option value="attribute">Set From Attribute</option>
            </select>
          </div>
        )}
      </div>

      {shopifyOpt === "attribute" && (
        <div className="shopify-select">
          <p>Set Shopify Attribute</p>
          <select
            name="setShopifyAttrib"
            onChange={(e) => setShopifyVal(e.target.value)}
          >
            <option value="" disabled selected>
              Set Shopify Attribute
            </option>
            {shopify.map((item, i) => {
              return (
                <option key={i} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      )}

      {shopifyOpt === "custom" && (
        <div className="shopify-select">
          <p>Set Shopify Attribute</p>
          <input
            type="text"
            placeholder="Set Shopify Attribute"
            onChange={(e) => setShopifyVal(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Box;
