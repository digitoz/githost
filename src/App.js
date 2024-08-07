import logo from './logo.svg';
import './App.css';
import Compar from "./components/Compar";
import Rlist from "./components/Rlist";
import Cssstyling from "./components/Cssstyling1";
import CssstyleCom from "./components/CssstyleCom";
import Rstate from "./components/Rstate";
import MScom from "./components/MScom";
import Useobjinstate from "./components/Useobjinstate";
import Upadteobjinstate from "./components/Upadteobjinstate";
import Updatesteinarray from "./components/Updatesteinarray";
import Useeffreact from "./components/Useeffreact";
import Myform from "./Fcomponents/Myform";
import Handlingmultiinput from "./Fcomponents/Handlingmultiinput";
import Simonchangehandler from "./Fcomponents/Simonchangehandler";
import Setinitalfrmval from "./Fcomponents/Setinitalfrmval";
import Selectin from "./Fcomponents/Selectin";

//For route start
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Rroute/Home";
import Nestrt from "./Rroute/Nestrt";
import Nestcrt from "./Rroute/Nestcrt";
import Navprog from "./Rroute/Navprog";
function App() {
  return (
    <div className="App">
     
<h4>Git Deployment</h4>

{/* For route start */}
<BrowserRouter>
<Routes>
  <Route path="/" element={<Compar/>}/>
  <Route path="/Rlist" element={<Rlist/>}/>
  <Route path="/home/:id" element={<Home/>}/>

  <Route path="/nert">
  <Route path="Nestrt" element={<Nestrt/>}/>
  <Route path="Nestcrt" element={<Nestcrt/>}/>

</Route>
<Route path="/Navprog" element={<Navprog/>}/>
</Routes>
</BrowserRouter>
{/* For route End */}

{/* <Compar/>
<Rlist/>
<Cssstyling/>
<CssstyleCom/>
<Rstate/>
<MScom/>
<Useobjinstate/>
<Upadteobjinstate/>
<Updatesteinarray/>
<Useeffreact/> */}
{/* <Myform/> */}
{/* <Handlingmultiinput/> */}
{/* <Handlingmultiinput/> */}
{/* <Setinitalfrmval/> */}
<Selectin/>
   </div>
  );
}

export default App;
