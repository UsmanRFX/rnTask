export const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };
  
  export const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };
  