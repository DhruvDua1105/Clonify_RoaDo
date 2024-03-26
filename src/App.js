import React from 'react';
import { Paper, Box, Toolbar } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HeaderCard from './components/HeaderCard';
import SubCard from './components/SubCard';
import Performance from './components/Performance';
import InstalledApps from './components/InstalledApps';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {


	const drawerWidth = 240;

	const cardDetails = [
		{
			heading: 'Revenue',
			subheading: '$56,945',
			profitLoss: '45',
			text: 'From 4.6%',
			index: 0
		},
		{
			heading: 'Users',
			subheading: '76.8%',
			profitLoss: '-1.7',
			text: 'From 4.6%',
			index: 1
		},
		{
			heading: 'New Signups',
			subheading: '116',
			profitLoss: '0',
			text: '',
			index: 2
		},
		{
			heading: 'Retention',
			subheading: '12.67%',
			profitLoss: '0.6',
			text: 'From 4.6%',
			index: 3
		},
	];

	const data = [
		{ source: 'Zepplin', amount: '686.00', status: 'Active', userId: '114423', joined: 'October', group: 'Design' },
		{ source: 'Figma', amount: '864.00', status: 'Pending', userId: '76223', joined: 'June', group: 'Finance' },
		{ source: 'Meta', amount: '176.00', status: 'Cancelled', userId: '89453', joined: 'March', group: 'Coding' },
		{ source: 'Angular', amount: '49.00', status: 'Active', userId: '11467', joined: 'February', group: 'Marketing' },
		{ source: 'Vue', amount: '999.00', status: 'Active', userId: '67389', joined: 'October', group: 'Finance' },
	];

	const theme = useTheme();
	const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Paper style={{ backgroundColor: '#F2F4F7', padding: '20px', minHeight: '100vh' }} elevation={3}>
			<Box sx={{ display: 'flex' }}>
				<Navbar />
				<Sidebar />
				<Box
					component="main"
					sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)`, backgroundColor: '#F2F4F7' } }}
				>
					<Toolbar />
					<HeaderCard />
					<div style={{ display: 'flex', flexDirection: isPhoneSize ? 'column' : 'row', gap: '16px' }}>
						{cardDetails.map((details, index) => (
							<SubCard key={index} {...details} />
						))}
					</div>
					<Performance />
					<InstalledApps data={data} />

				</Box>
			</Box>
		</Paper>
	);
}

export default App;
