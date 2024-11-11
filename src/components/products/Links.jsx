import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Links = ({ product }) => {
  let tag = product.attributes.tag.data;
  if (tag.length === 1) {
    tag = tag[0];
  }
  const { sku } = product.attributes;
  const { name: tagName } = tag.attributes;
  const { name: categoryName } = product.attributes.category.data.attributes;
  return (
    <div className="text-muted font-normal text-lg flex flex-col gap-4 ">
      <p>SKU : {sku}</p>
      <p>Category : {categoryName}</p>
      <p>Tags : {tagName}</p>
      <p className="flex items-center gap-4">
        Share :
        <div className="text-black flex cursor-pointer gap-4">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </p>
    </div>
  );
};

export default Links;
