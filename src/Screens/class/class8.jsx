import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function ClassCode() {
  const [load, setLoad] = useState(false)
  return (
    <div>
      {/* MUI  */}
      {/* <Container>
        <Box>
          <TextField label={"enter your name"} variant="standard" />
        </Box>
        <Box>
          <TextField label={"enter your name"} variant="filled" />
        </Box>
        <Box>
          <TextField label={"enter your name"} variant="outlined" />
        </Box>
      </Container> */}

      {/* stack */}
      {/* <Stack sx={{
        color: "red",
        p: 2,
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row'
        },
        gap: 2,
      }}>
          <Typography>
            first Element
          </Typography>
          <Typography>
            second Element
          </Typography>
          <Typography>
            third Element
          </Typography>
      </Stack> */}

      {/* GRID  */}

      {/* <button onClick={()=>setLoad(prev=>!prev)}>
        on
      </button>

      {
        load ? "loading" :
      

      <Grid container>
        <Grid item xs={12} sm={6} lg={4} xl={4}>
      <Box >
        <Typography>
          Hello World!
        </Typography>
      </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={4}>
      <Box >
        <Typography>
          Hello World!
        </Typography>
      </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={4}>
      <Box >
        <Typography>
          Hello World!
        </Typography>
      </Box>
        </Grid>
      </Grid>
} */}
      

    </div>
  );
}

export default ClassCode;

// *************************  *****************************
// ==========> agar github sy project clone krain gy to us k bhad sirf yarn ya npm i krain gy to yh sary package install kr dy ga
// linux mint ====> best till now
// kernal ==> ??

// ************************* MOBILE OS *****************************
// pixel , motoroola, nokia ===> pure android

// ************************* MATERIAL UI (MUI) *****************************
// yeh js k sath css likh skty hain
// install ==>

// ===> stack => flex by default column ===> props => direction, justifycontent
// ===> CUSTOM STYLE in MUI => sx = {{key:value, key: value}}

// ==> object-fit in CSS  ===========> for image control in card

// ==> routing, 

// ********************************** IMP **************************
// APP BAR
// reactslider ===> isy alag sy add krna parta hy 

// ********************************** ROUTER **************************

// create config in src and Router in config and AppRouter file in Router
// basic route, dynamic route, public routes, private routes, nested route

// ********************************** ROUTER **************************
// create list view and grid view