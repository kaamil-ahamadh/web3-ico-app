import axios from "axios";

const userTransactions = async (apiUrl) => {
  try {
    const _data = [];
    // Initial Data
    const response = await axios.get(apiUrl);

    const data = response.data.result;

    //mapping for adding everything to an new array
    data.map((item) => {
      //TX Hash, timestamp,Tokens, and Investor
      const txHash = item.transactionHash;
      const timestamp = parseInt(item.timeStamp);
      let tokens = item.data;
      tokens = "0x" + tokens.substring(66, 131);
      tokens = parseInt(tokens) / 1e18;
      let investor = item.topics[2];
      investor = "0x" + investor.substring(26, 67);

      //Adding
      _data.push({
        txHash,
        timestamp,
        tokens,
        investor,
      });
    });

    return _data.reverse();
  } catch (error) {
    console.log(error);
  }
};

export default userTransactions;
