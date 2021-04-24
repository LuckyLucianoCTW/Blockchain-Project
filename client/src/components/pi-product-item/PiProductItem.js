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
import { PiModal } from "../";
import React, { useState } from "react";
import PiProductItemBuy from "./PiProductItemBuy";
import PiProductItemReport from "./PiProductItemReport";

export default function PiProductItem({
  code,
  imageUrl,
  name,
  description,
  //   material,
  price,
  mountTimeout,
}) {
  const [buyModal, setBuyModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  return (
    <>
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
              onClick={() => setBuyModal(true)}
            >
              <Typography variant="body2">Buy for {price} ETH</Typography>
            </Button>
            <Button
              size="small"ch
              color="secondary"
              onClick={() => setReportModal(true)}
            >
              <Typography variant="body2">Report</Typography>
            </Button>
          </Box>
        </Card>
      </Grow>

      <PiModal isOpen={buyModal} handleClose={() => setBuyModal(false)}>
        <PiProductItemBuy
          {...{
            imageUrl,
            name,
            description,
            price,
            handleClose: () => setBuyModal(false),
          }}
        />
      </PiModal>

      <PiModal isOpen={reportModal} handleClose={() => setReportModal(false)}>
        <PiProductItemReport
          {...{
            code,
            imageUrl,
            name,
            description,
            price,
            handleClose: () => setReportModal(false),
          }}
        />
      </PiModal>
    </>
  );
}
