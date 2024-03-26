import { React, Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import bolt from "../assets/images/bolt.png"

export default function HeaderCard() {
      return (
            <Box>
                  <Card variant="outlined" sx={{ minWidth: 275, background: 'rgba(40, 40, 40, 1)', borderRadius: '16px', px: 2, py: 1, mb: 4 }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                              <Grid item xs={12} sm={6}>
                                    <CardContent sx={{ textAlign: { xs: 'center', sm: 'initial' } }} >
                                          <Typography sx={{
                                                fontSize: 28, color: 'rgba(255, 255, 255, 1)', fontFamily: 'Inter, sans-serif', fontWeight: 600, mb: 0.5, letterSpacing: '-0.25px',

                                          }} gutterBottom>
                                                Unlock premium stats
                                          </Typography>
                                          <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 1)', fontFamily: 'Inter, sans-serif', fontWeight: 400 }} gutterBottom>
                                                Get up to 10TB of storage for a limited time
                                          </Typography>
                                    </CardContent>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                    <CardActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                                          <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<img src={bolt} alt="upgrade" />}
                                                sx={{
                                                      borderRadius: '50px',
                                                      backgroundColor: '#FFFFFF',
                                                      color: 'rgba(40, 40, 40, 1)',
                                                      textTransform: 'none',
                                                      fontFamily: 'Inter, sans-serif',
                                                      fontWeight: '600',
                                                      fontSize: '16px',
                                                      padding: '9px 24px',
                                                      letterSpacing: '-0.5px',
                                                      '&:hover': {
                                                            backgroundColor: '#F2F4F7'
                                                      },
                                                }}
                                          >
                                                Upgrade
                                          </Button>
                                    </CardActions>
                              </Grid>
                        </Grid>
                  </Card>

            </Box>
      );
}
