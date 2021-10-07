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
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import React, { useState } from "react";
import { PiModal } from "../";
import { useAuth } from "../../store";
import { IconButton, StyledTopActions } from "./PiProductItem.style";
import PiProductItemBuy from "./PiProductItemBuy";
import PiProductItemRemove from "./PiProductItemRemove";
import PiProductItemReport from "./PiProductItemReport";

export default function PiProductItem({
  code,
  imageUrl,
  name,
  brand,
  country,
  description,
  //   material,
  price,
  mountTimeout,
  handleEdit,
}) {
  const { isAdmin } = useAuth();
  const [buyModal, setBuyModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  return (
    <>
      <Grow in timeout={{ enter: mountTimeout }}>
        <Box position="relative">
          {isAdmin && (
            <StyledTopActions>
              <IconButton color="green">
                <CreateIcon onClick={() => handleEdit()} />
              </IconButton>
              <IconButton color="red" onClick={() => setRemoveModal(true)}>
                <CloseIcon />
              </IconButton>
            </StyledTopActions>
          )}
          <Card>
            <CardActionArea disabled>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${name}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {brand}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {country}
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
            </Box>
          </Card>
        </Box>
      </Grow>

      <PiModal isOpen={buyModal} handleClose={() => setBuyModal(false)}>
        <PiProductItemBuy
          {...{
            code,
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

      <PiModal isOpen={removeModal} handleClose={() => setRemoveModal(false)}>
        <PiProductItemRemove
          {...{
            code,
            imageUrl,
            name,
            description,
            price,
            handleClose: () => setRemoveModal(false),
          }}
        />
      </PiModal>
    </>
  );
}
