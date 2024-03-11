import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, useTheme, CircularProgress } from '@mui/material';

interface ValidatorStats {
  moniker: string;
  tokens: string;
  commissionRate: string;
}

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  const theme = useTheme();

  return (
    <Card sx={{
      backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
      color: theme.palette.text.primary,
      m: 1, // margin
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[5], // shadow to match your design
    }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3),
        '&:last-child': {
          paddingBottom: theme.spacing(3),
        },
      }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: theme.spacing(1) }}>
          {title}
        </Typography>
        <Typography variant="h4">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Stats: React.FC = () => {
  const [validatorStats, setValidatorStats] = useState<ValidatorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchValidatorStats = async () => {
      try {
        const response = await fetch('https://api-agoric.nodes.guru/cosmos/staking/v1beta1/validators/agoricvaloper1xvzrfcwnegxqgtqlswnra6g7483puykr5w627y');
        const data = await response.json();

        const stats: ValidatorStats = {
          moniker: data.validator.description.moniker,
          tokens: (parseInt(data.validator.tokens) / 1e6).toFixed(2), // Convert tokens to a human-readable format
          commissionRate: (parseFloat(data.validator.commission.commission_rates.rate) * 100).toFixed(2) + '%', // Convert to percentage
        };

        setValidatorStats(stats);
      } catch (error) {
        console.error('Failed to fetch validator stats:', error);
      } finally {
        setIsLoading(false); // Hide loading indicator when the fetch is complete
      }
    };

    fetchValidatorStats();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!validatorStats) {
    return <Typography variant="h6" align="center">Failed to load data.</Typography>;
  }

  return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      p: 2, // padding
    }}>
      <StatCard title="Moniker" value={validatorStats.moniker} />
      <StatCard title="Tokens" value={`${validatorStats.tokens} BLD`}  />
      <StatCard title="Commission Rate" value={validatorStats.commissionRate} />
      {/* Add more StatCards as needed */}
    </Box>
    </>
  );
};

export default Stats;
