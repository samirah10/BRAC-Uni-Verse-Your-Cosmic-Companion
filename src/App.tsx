import {Grid, GridItem} from "@chakra-ui/react";
//import SignupLogin from "./componenets/SignupLogin";
import NavBar from "./componenets/NavBar";
import Features from "./componenets/Features";

function App(){
  let items = [
    "User",
    "Class Schedule",
    "Faculty information",
    "Events Calendar",
    "Emergency Alerts",
    "Lost and Found",
    "Tolet",
    "Alumni Corner",
    "Academic Resources",
    "Campus Navigation",
    "Feedback and Suggestions",
    ];
    const handleSelectItem = (item:string)=> {
      console.log(item);
    }

  return <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
    <GridItem area="nav">
      <NavBar/>
    </GridItem>
 
    <GridItem area="aside">
     <Features items= {items} heading="" onSelectItem={handleSelectItem}/>
    </GridItem>

    {/* <GridItem area="main">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "top-right", padding: "10px" }}>
    <SignupLogin></SignupLogin></div>
    </GridItem> */}
   
  </Grid>


  }

export default App;