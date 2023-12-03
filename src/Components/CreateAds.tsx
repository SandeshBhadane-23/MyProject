import { Box } from "@mui/material";
import { Button, Card, Checkbox } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAds = () => {
  const navigate = useNavigate();
  const [isTextAdsChecked, setIsTextAdsChecked] = useState(false);
  const [isMediaAdsChecked, setIsMediaAdsChecked] = useState(false);
  const handleNextButtonClick = () => {
    if (isTextAdsChecked === true) {
      navigate("/createTextAds");
    } else if (isMediaAdsChecked === true) {
      navigate("/createMediaAds");
    }
  };
  const cardStyle = {
    width: "100%",
    padding: "110px",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    margin: "30px auto",
    position: "relative",
    minHeight: "300px",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  };
  const boxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "510%",
  };
  const innerBoxStyle = {
    flex: "0 0 14%",
    height: "600px",
    margin: "0 16px 36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const { Meta } = Card;
  const handleCheckboxTextAdsChange = (event: any) => {
    setIsTextAdsChecked(event.target.checked);
    setIsMediaAdsChecked(false);
  };
  const handleCheckboxMediaAdsChange = (event: any) => {
    setIsMediaAdsChecked(event.target.checked);
    setIsTextAdsChecked(false);
  };

  return (
    <>
      <Card style={cardStyle} title="Create Ads">
        <Box style={boxStyle}>
          <Box
            style={innerBoxStyle}
            p={16}
            boxShadow={6}
            bgcolor="background.paper"
            textAlign="start"
            maxHeight="100px"
          >
            <Checkbox
              style={{ marginBottom: "8px" }}
              checked={isTextAdsChecked}
              onChange={handleCheckboxTextAdsChange}
            />
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="https://techcrunch.com/wp-content/uploads/2021/01/Mock-2.png"
                />
              }
            >
              <Meta title="Create Text Ad" style={{ color: "black" }} />
            </Card>
          </Box>
          <Box
            style={innerBoxStyle}
            p={16}
            boxShadow={6}
            bgcolor="background.paper"
            textAlign="start"
            maxHeight="100px"
          >
            <Checkbox
              style={{ marginBottom: "8px" }}
              checked={isMediaAdsChecked}
              onChange={handleCheckboxMediaAdsChange}
            />
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="https://techcrunch.com/wp-content/uploads/2021/01/Mock-2.png"
                />
              }
            >
              <Meta title="Create Media Ad" style={{ color: "black" }} />
            </Card>
          </Box>
        </Box>
        <div style={buttonStyle}>
          <Button type="primary" onClick={handleNextButtonClick}>
            NEXT
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CreateAds;
