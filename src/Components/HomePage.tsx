import { TableChart } from '@mui/icons-material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';
import { PieChart } from "@mui/x-charts/PieChart";
import { Card, Col, Row, Select } from "antd";
import { useState } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DashBoardTable from "./DashBoardTable";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState<any>("table");
  const [selectedOption, setSelectedOption] = useState<any>("Clicks");
  const data: any = [
    { value: 40, label: "40% Male", color: 'orange'  },
    { value: 35, label: "35% Female", color: 'blue'  },
    { value: 25, label: "25% Unknown", color: 'black'   },
  ];
  const size = {
    width: 500,
    height: 200,
  };
  const handleIconClick = (icon: any) => {
    setActiveIcon(icon);
  };
  const handleChange = (value: string) => {
     setSelectedOption(value);
  };
  const handleTableHelpClick = () => {
    navigate("/helpPage")
  };
  const handleChartHelpClick = () => {
      navigate("/helpPage")
  };
  const getChartData: any = () => {
    switch (selectedOption) {
      case 40:
        return [
          { value: 40, label: '40% Male', color: 'orange' },
        ];
      case 35:
        return [
          { value: 35, label: '35% Female', color: 'black' },
        ];
      case 25:
        return [
          { value: 25, label: '25% Unknown', color: 'blue' },
        ];
      default:
        return data;
    }
  };
  return (
    <>
    <Row gutter={16}>
    {activeIcon === 'table' && (
        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginTop: '20px' }}>
          <Card
            title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Ad Insights</span>
                <HelpOutlineOutlinedIcon style={{ color: '#bdbdbd' }} onClick={() => handleTableHelpClick()} />
              </div>
            }
            style={{ width: '100%', minHeight: '300px' }}
            headStyle={{ textAlign: 'left' }}
          >
            <div style={{ overflow: 'auto', width: "100%" }}>
              <DashBoardTable />
            </div>
          </Card>
        </Col>
      )}
      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginTop: '20px' }}>
        <Card
          title="Ad Insights"
          extra={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Select
                defaultValue="Clicks"
                style={{ width: '100%', maxWidth: '120px', marginRight: 8 }}
                onChange={handleChange}
                options={[
                  { value: 40, label: '40% Male' },
                  { value: 35, label: '35% Female' },
                  { value: 25, label: '25% Unknown' },
                ]}
              />
            <HelpOutlineOutlinedIcon style={{ color: '#bdbdbd' }} onClick={() => handleChartHelpClick()} />
            </div>
          }
          style={{ width: '100%', minHeight: '300px' }}
          headStyle={{ textAlign: 'left' }}
        >
          <PieChart series={[{ data: getChartData(), innerRadius: 60, color: data.map((item: any) => item.color), }]} {...size} />
          <Row gutter={[16, 16]} justify="end">
            <Col>
              <IconButton onClick={() => handleIconClick('table')} color={activeIcon === 'table' ? 'primary' : 'default'}>
                <TableChart />
              </IconButton>
            </Col>
            <Col>
              <IconButton onClick={() => handleIconClick('pie')} color={activeIcon === 'pie' ? 'primary' : 'default'}>
                <DonutLargeIcon />
              </IconButton>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default HomePage;
