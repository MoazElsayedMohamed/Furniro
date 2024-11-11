import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";
import { useState } from "react";

const Size = ({ product }) => {
  const { token, username } = useAuth();
  const { size } = product.attributes;

  const [activeSize, setActiveSize] = useState(size);

  function handleClick(size) {
    if (token && username) {
      setActiveSize(size);
    } else {
      toast.error("You can't change size. you must log in first ");
    }
  }

  return (
    <>
      <h3 className="text-2xl font-normal text-muted sm:max-xl:text-lg">
        Size
      </h3>
      <div>
        <Button
          variant={activeSize === "L" ? "default" : "ghost"}
          className="mr-2"
          size="sm"
          onClick={() => handleClick("L")}
        >
          L
        </Button>
        <Button
          variant={activeSize === "XL" ? "default" : "ghost"}
          className="mr-2"
          size="sm"
          onClick={() => handleClick("XL")}
        >
          XL
        </Button>
        <Button
          variant={size === "XS" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleClick("XS")}
        >
          XS
        </Button>
      </div>
    </>
  );
};

export default Size;
