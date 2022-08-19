import { toast } from "react-toastify";

const handleError = (error, text) => {
  if (error.message.includes("invalid decimal value")) {
    toast.error(`Invalid ${text} Amount`);
  } else if (error.message.includes("value out-of-bounds")) {
    toast.error(`${text} Amount Should not be negative`);
  } else if (error.message.includes("underflow")) {
    toast.error(`${text} Amount Should not be negative`);
  } else if (error.message.includes("Check Min and Max")) {
    toast.error(`Please Check Min And Max ${text} Tokens before buying`);
  } else if (error.message.includes("MetaMask Tx Signature:")) {
    toast.error("User denied the transaction");
  } else if (error.message.includes("Insufficient Funds")) {
    toast.error("Insufficient Funds");
  } else if (error.message.includes("amount exceeds balance")) {
    toast.error("Insufficient Funds");
  } else if (error.message.includes("INSUFFICIENT_FUNDS")) {
    toast.error("Insufficient Funds");
  } else {
    toast.error(error.message);
  }
};

export default handleError;
