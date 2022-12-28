// importing axios
import axios from "axios";

const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI4NzYzMDRlMmMzZDc1NjQ0Mjg1N2Q5YzUyQjI1MTA5MzI2Njg3MTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzIyMTE3MTQ3NTMsIm5hbWUiOiJDb25zdGVsbGF0aW9ucyJ9.006bJwzTpsd0Xm3pT8I-fC9B7ENmaaK2kc2uspG4VZw`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
