import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import dots from "../assets/images/DotsVertical.png";
import zepplin from "../assets/images/Zepplin.png"
import figma from "../assets/images/Figma.png"
import meta from "../assets/images/Meta.png"
import angular from "../assets/images/Angular.png"
import vue from "../assets/images/Vue.png"

const InstalledApps = ({ data }) => {

      const renderIcon = (index) => {
            switch (index) {
                  case 0:
                        return zepplin;
                  case 1:
                        return figma;
                  case 2:
                        return meta;
                  case 3:
                        return angular;
                  case 4:
                        return vue;
                  default:
                        return null;
            }
      };

      const getStatusPill = (status) => {
            switch (status) {
                  case 'Active':
                        return <Box sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: '600',
                              fontSize: '12px',
                              borderRadius: '50px',
                              padding: '2px 10px',
                              backgroundColor: 'rgba(220, 255, 245, 1)',
                              color: 'rgba(32, 201, 151, 1)',
                        }}>Active</Box>;
                  case 'Pending':
                        return <Box sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: '600',
                              fontSize: '12px',
                              borderRadius: '50px',
                              padding: '2px 10px',
                              backgroundColor: 'rgba(255, 234, 216, 1)',
                              color: 'rgba(253, 126, 20, 1)',
                        }}>Pending</Box>;
                  case 'Cancelled':
                        return <Box sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: '600',
                              fontSize: '12px',
                              borderRadius: '50px',
                              padding: '2px 10px',
                              backgroundColor: 'rgba(242, 244, 247, 1)',
                              color: 'rgba(95, 105, 128, 1)',
                        }}>Cancelled</Box>;
                  default:
                        return null;
            }
      };

      return (
            <Box sx={{ bgcolor: 'white', my: 4, boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
                  <Box sx={{ bgcolor: 'white', px: 3, py: 2, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #EAECF0' }}>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '18px', color: 'rgba(40, 40, 40, 1)' }}>
                              Installed apps
                        </Typography>
                        <Button style={{ padding: 0, minWidth: 'auto' }}>
                              <img src={dots} alt="dots" />
                        </Button>
                  </Box>
                  <TableContainer component={Paper}>
                        <Table>
                              <TableHead>
                                    <TableRow sx={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>Source</TableCell>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>Amount</TableCell>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>Status</TableCell>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>User ID</TableCell>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>Joined</TableCell>
                                          <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(95, 105, 128, 1)', letterSpacing: '-0.25px', px: 3 }}>Group</TableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {data.map((row, index) => (
                                          <TableRow key={index}>
                                                <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '14px', px: 2, color: 'rgba(40, 40, 40, 1)' }}>
                                                      <img src={renderIcon(index)} alt="source icon" style={{ marginRight: '0px', verticalAlign: 'middle' }} />
                                                      {row.source}
                                                </TableCell>
                                                <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', px: 3, color: 'rgba(95, 105, 128, 1)' }}>{row.amount}</TableCell>
                                                <TableCell sx={{ position: 'relative', px: 3 }}>
                                                      <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', display: 'inline-block' }}>
                                                            {getStatusPill(row.status)}
                                                      </Box>
                                                </TableCell>
                                                <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', px: 3, color: 'rgba(95, 105, 128, 1)' }}>{row.userId}</TableCell>
                                                <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', px: 3, color: 'rgba(95, 105, 128, 1)' }}>{row.joined}</TableCell>
                                                <TableCell sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', px: 3, color: 'rgba(95, 105, 128, 1)' }}>{row.group}</TableCell>
                                          </TableRow>
                                    ))}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </Box>
      );
};

export default InstalledApps;
