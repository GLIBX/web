import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, useTheme, CircularProgress } from '@mui/material';

interface ValidatorStats {
  moniker: string;
  tokens: number; // Storing tokens as a number for calculation
  totalValue: string; // The value in USD
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
      boxShadow: theme.shadows[5], // shadow to match design
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
    const [currentPrice, setCurrentPrice] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchStats = async () => {
        try {
          const validatorResponse = await fetch('https://api-agoric.nodes.guru/cosmos/staking/v1beta1/validators/agoricvaloper1xvzrfcwnegxqgtqlswnra6g7483puykr5w627y');
          const validatorData = await validatorResponse.json();
  
          const priceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=agoric&vs_currencies=usd');
          const priceData = await priceResponse.json();
  
          const tokenPrice = priceData.agoric.usd;
          setCurrentPrice(tokenPrice.toFixed(4)); 
  
          const tokens = parseInt(validatorData.validator.tokens) / 1e6;
          const totalValue = (tokens * tokenPrice).toFixed(2);
  
          const stats: ValidatorStats = {
            moniker: validatorData.validator.description.moniker,
            tokens: tokens,
            totalValue: totalValue,
            commissionRate: (parseFloat(validatorData.validator.commission.commission_rates.rate) * 100).toFixed(2) + '%',
          };
  
          setValidatorStats(stats);
        } catch (error) {
          console.error('Failed to fetch stats:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchStats();
    }, []);
  
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      );
    }
  
    if (!validatorStats || currentPrice === null) {
      return <Typography variant="h6" align="center">Failed to load data.</Typography>;
    }
  
    return (
      <Box sx={{ width: '100%', textAlign: 'center', p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Agoric Infrastructure Stats
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <StatCard title="Glibx Moniker" value={validatorStats.moniker} />
          <StatCard title="Tokens Stake With Glibx" value={validatorStats.tokens.toString()} />
          <StatCard title="Total Value" value={`$${validatorStats.totalValue}`} />
          <StatCard title="Commission Rate" value={validatorStats.commissionRate} />
          <StatCard title="Current BLD Price" value={`$${currentPrice}`} />
        </Box>
      </Box>
    );
  };
  
  export default Stats;
