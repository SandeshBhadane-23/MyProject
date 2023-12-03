import { Grid, TextareaAutosize } from "@mui/material";
import { Button, Card, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

const CreateMediaAds = () => {
  const [form] = useForm();
  const { Option } = Select;
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<any>(false);
  const [description, setDescription] = useState('');
  const cardStyle = {
    width: "100vw",
    maxWidth: "100%",
    height: "900px",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    margin: "50px auto",
    minHeight: "300px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  };
  const buttonStyle = {
    position: "absolute",
    bottom: "70px",
    right: "90px",
  };
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleBackButtonClick = () => {
    navigate("/create-ads");
  };
  
  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };
  const initialValues = {
    heading01: "",
    heading02: "",
    landscapeMarketingImage: "",
    portraitMarketingImage: "",
    squareMarketingImage: "",
    videoURL: "",
    businessName: "",
    buttnLabel: "",
    websiteURL: "",
  };

  const onFinish = async (values: any) => {
    console.log("Form values:", values);
    setIsModalVisible(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsModalVisible(false);
    navigate("/create-ads");
  };

  return (
    <>
      <SuccessModal visible={isModalVisible} onClose={handleModalClose} />
      <Card
        style={cardStyle}
        headStyle={{ textAlign: "left" }}
        title="Create Text & Media"
      >
        <Form
          form={form}
          initialValues={initialValues}
          onFinish={onFinish}
          {...layout}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Heading 01</span>}
                name="heading01"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add a heading that would make users interested"
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Heading 02</span>}
                name="heading02"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add a heading that would make users interested"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Form.Item label={<span style={{ fontWeight: "bold" }}>Description 01</span>} name="description01">
                <TextareaAutosize
                  minRows={3}
                  maxRows={10}
                  name="description01"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  style={{
                    width: "100%",
                    minHeight: "45px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                />
              </Form.Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    Landscape Marketing Image (1:9:1)
                  </span>
                }
                name="landscapeMarketingImage"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add the URL of the Image you want to use for the ad"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    Portrait Marketing Image (4:5)
                  </span>
                }
                name="portraitMarketingImage"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add the URL of the Image you want to use for the ad"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    square Marketing Image (1:1)
                  </span>
                }
                name="squareMarketingImage"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add the URL of the Image you want to use for the ad"
                />
              </Form.Item>
            </Grid>
            <Grid item lg={24}>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Video URL</span>}
                name="videoURL"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add the URL of the video you want to use for the ad"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>Business Name</span>
                }
                name="businessName"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add your business name"
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Button Label</span>}
                name="buttnLabel"
              >
                <Select
                  style={{ height: "40px", textAlign: "initial" }}
                  placeholder="Select a label that that best suits your ad"
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </Form.Item>
            </Grid>
            <Grid item lg={24}>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Website URL</span>}
                name="websiteURL"
              >
                <Input
                  style={{ height: "40px" }}
                  placeholder="Add the URL of the landing page you want to redirect users to"
                />
              </Form.Item>
            </Grid>
          </Grid>
          <div style={buttonStyle}>
            <Button
              onClick={handleBackButtonClick}
              style={{
                width: "125px",
                marginRight: "10px",
              }}
            >
              Back
            </Button>
            <Button type="primary" htmlType="submit" style={{ width: "125px" }}>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default CreateMediaAds;
