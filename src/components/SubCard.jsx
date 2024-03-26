import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const SubCard = ({ heading, subheading, profitLoss, text, index }) => {
    return (
        <Card variant="outlined" sx={{ width: '100%', marginBottom: 2, borderRadius: '12px', boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.06)' }}>
            <CardContent sx={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                    <Typography variant="h6" sx={{ fontSize: '16px', color: 'rgba(95, 105, 128, 1)', marginBottom: '8px' }}>{heading}</Typography>
                    <Typography variant="h5" sx={{ fontSize: '24px', color: 'rgba(40, 40, 40, 1)', marginBottom: '16px' }}>{subheading}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{
                            borderRadius: '50px',
                            padding: '4px 12px',
                            backgroundColor: profitLoss === 0 ? 'rgba(242, 244, 247, 1)' : (profitLoss > 0 ? 'rgba(220, 255, 245, 1)' : 'rgba(255, 224, 227, 1)'),
                            color: 'white',
                            marginRight: '8px',
                        }}>
                            <Typography sx={{ fontSize: '12px', fontWeight: '600', color: profitLoss === 0 ? 'rgba(95, 105, 128, 1)' : (profitLoss > 0 ? 'rgba(32, 201, 151, 1)' : 'rgba(220, 53, 69, 1)') }}>
                                {profitLoss !== 0 && (profitLoss > 0 ? '+' : '-')}{Math.abs(profitLoss)}%
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: 'rgba(157, 159, 161, 1)' }}>{text}</Typography>
                    </Box>
                </div>
            </CardContent>
        </Card>
    );
};

export default SubCard;
