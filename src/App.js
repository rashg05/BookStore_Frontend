import logo from './logo.svg';
import './App.css';
import Router from './router/router';
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
     <Router />
    </div>
      //   <>
      //   <Grid
      //     container
      //     direction="row"
      //     justifyContent="space-around"
      //     alignItems="center"
      //     lg={12}
      //     md={10}
      //     sm={10}
      //     xs={10}
      //     style={{ border: "1px solid red", height: 400 }}
      //   >
      //     <Grid
      //       item
      //       container
      //       lg={6}
      //       md={6}
      //       sm={3}
      //       style={{ border: "1px solid red", height: 50 }}
      //     >
      //       <Grid item lg={2} style={{ border: "1px solid red", height: 20 }}>
      //         <div>notes</div>
      //       </Grid>
      //     </Grid>
      //     <Grid
      //       item
      //       container
      //       lg={6}
      //       md={6}
      //       sm={3}
      //       xs={12}
      //       style={{ border: "1px solid red", height: 50 }}
      //     >
      //       <Grid item lg={2} style={{ border: "1px solid red", height: 20 }}>
      //         <div>notes</div>
      //       </Grid>
      //     </Grid>
      //     <Grid
      //       item
      //       container
      //       lg={6}
      //       md={6}
      //       sm={3}
      //       style={{ border: "1px solid red", height: 50 }}
      //     >
      //       <Grid item lg={2} style={{ border: "1px solid red", height: 20 }}>
      //         <div>notes</div>
      //       </Grid>
      //     </Grid>
      //     {/* <Grid item lg={3} xs={9}>
      //       <Takenotethree />
      //     </Grid> */}
      //   </Grid>
      // </>
  );
}

export default App;
