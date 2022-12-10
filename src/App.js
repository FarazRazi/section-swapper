import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { getSections } from "./firebase";
import "./App.css";

function App() {
  const [sections, setSections] = useState();
  const getAllSections = () => {};
  useEffect(() => {
    try {
      getSections().then((u) => {
        console.log(u);
        setSections(u);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [setSections]);
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h1" marginTop={5}>
            Section Swapper
          </Typography>
          <Grid container align="center" justifyContent="center" spacing={2}>
            <Grid item>
              <TextField
                label="Email"
                value={email}
                helperText="Please Input Your valid NU email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item marginTop={1}>
              <Button variant="contained" onClick={() => askSwap()}>
                Ask For Swap
              </Button>
            </Grid>
          </Grid>

          <Typography variant="body" marginY={5}>
            {(fromSection ? fromSection : "From") +
              " -> " +
              (toSection ? toSection : "To")}
          </Typography>
          <Typography variant="body" marginBottom={5}>
            Select your sections and check for any swaps available below.
          </Typography>
          <Grid container align="center" justifyContent="center" spacing={2}>
            <Grid item xs={4}>
              <Grid marginY={2}>
                <Card sx={{ backgroundColor: "#48a6de" }} variant="outlined">
                  <CardHeader title="From" />
                </Card>
              </Grid>
              <Grid container align="center" spacing={2}>
                {sections &&
                  sections.map((section, index) => (
                    <Grid item key={index} xs={12}>
                      <Card
                        sx={{
                          backgroundColor:
                            fromSection === section.name ? "green" : "#0000",
                        }}
                      >
                        <CardActionArea
                          onClick={() =>
                            toSection !== section.name
                              ? setFromSection(section.name)
                              : null
                          }
                        >
                          <CardHeader title={section.name} />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid marginY={2}>
                <Card sx={{ backgroundColor: "#48a6de" }}>
                  <CardHeader title="To" />
                </Card>
              </Grid>
              <Grid container align="center" spacing={2}>
                {sections &&
                  sections.map((section, index) => (
                    <Grid item key={index} xs={12}>
                      <Card
                        sx={{
                          backgroundColor:
                            toSection === section.name ? "green" : "#0000",
                        }}
                      >
                        <CardActionArea
                          onClick={() =>
                            fromSection !== section.name
                              ? setToSection(section.name)
                              : null
                          }
                        >
                          <CardHeader title={section.name} />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={10} margin={2}>
              <Typography variant="h3">Available Swaps</Typography>
              <Grid container spacing={2} marginY={3}>
                {swaps &&
                  swaps.map((swap, index) => (
                    <Grid item key={index} xs={12}>
                      <Card>
                        <CardHeader
                          title={swap.email}
                          subheader={swap.fromSection + " -> " + swap.toSection}
                          action={
                            <Button onClick={() => openMail(swap.email)}>
                              Email
                            </Button>
                          }
                        />
                      </Card>
                    </Grid>
                  ))}
              </Grid>
              {swaps && swaps.length === 0 && (
                <Typography align="center">Sorry No Swaps founds</Typography>
              )}
            </Grid>
          </Grid>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
