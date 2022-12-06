import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './index.css';

function CustomCard({
  headerName,
  text,
  buttonName,
  buttonColor,
  redirectTo,
  color,
}) {
  const navigate = useNavigate();
  return (
    <Box width="300px">
      <Card>
        <Box
          component="div"
          sx={{ height: 120, background: color }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {headerName}
          </Typography>
          <p className="card-text">{text}</p>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => navigate(`/${redirectTo}`)}
            color={buttonColor}
            size="small"
          >
            {buttonName}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

CustomCard.propTypes = {
  headerName: PropTypes.string,
  text: PropTypes.string,
  buttonName: PropTypes.string,
  buttonColor: PropTypes.string,
  redirectTo: PropTypes.string,
  color: PropTypes.string,
};

export default CustomCard;
