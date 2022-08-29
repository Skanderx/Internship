import { Button, Typography } from "@mui/material";
import React from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function UploadPhoto({ onChange, imageName }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button color="secondary" variant="outlined" component="label">
        Upload picture
        <AddAPhotoIcon
          sx={{ marginLeft: "8px" ,
          height:"24",
          width:"24",
        }}
        />
        <input hidden accept="image/*" type="file" onChange={onChange} />
      </Button>
      {imageName && <Typography sx={{ ml: 3 }}>{imageName}</Typography>}
    </div>
  );
}

export default UploadPhoto;
