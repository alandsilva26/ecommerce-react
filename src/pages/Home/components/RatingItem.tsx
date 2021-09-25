import { Box, Rating } from '@mui/material';

interface IProps {
  rate: number;
  count: string;
}

const RatingItem = ({ rate, count }: IProps): JSX.Element => {
  return (
    <Box
      className="RatingStars__container"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={rate}
        precision={0.1}
        size="small"
        readOnly
      />
      <Box
        sx={{
          ml: 1,
          fontSize: '12px',
        }}
      >
        ({count})
      </Box>
    </Box>
  );
};

export default RatingItem;
