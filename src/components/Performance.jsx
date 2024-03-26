import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PerformanceGraph from "../assets/images/Axis.png";
import title from "../assets/images/Legend.png";
import dots from "../assets/images/DotsVertical.png";

const Performance = () => {
      return (
            <Box sx={{ bgcolor: 'white', my: 2, boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
                  <Box sx={{ bgcolor: 'white', px:3, py:2, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #EAECF0' }}>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '18px', color: 'rgba(40, 40, 40, 1)' }}>
                              Performance
                        </Typography>
                        <Button style={{ padding: 0, minWidth: 'auto' }}>
                              <img src={dots} alt="dots" />
                        </Button>
                  </Box>
                  <Box sx={{ p: 2, marginLeft: -2, marginRight: -2 }}>
                        <img src={PerformanceGraph} alt="Performance Graph" width="100%" />
                  </Box>
                  <Box sx={{ p: 2 }}>
                        <img src={title} alt="title" width="100%" />
                  </Box>
            </Box>
      );
};

export default Performance;
