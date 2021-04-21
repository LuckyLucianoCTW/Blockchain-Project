import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grow,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function PiProductItem({
  imageUrl,
  name,
  description,
  //   material,
  price,
  mountTimeout,
}) {
  return (
    <Grow in timeout={{ enter: mountTimeout }}>
      <Card>
        <CardActionArea disabled>
          <CardMedia
            image={imageUrl}
            title="Contemplative Reptile"
            style={{ height: "140px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${name}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            disableElevation
            size="small"
            color="primary"
            variant="contained"
          >
            Buy for ${price}
          </Button>
          <Button size="small" color="secondary">
            Report
          </Button>
        </Box>
      </Card>
    </Grow>
  );
}
