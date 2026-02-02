// import './App.css'
import ToDo from "./Components/01_how_to_use_function_and_its_call_JSX";
import VariableUse from "./Components/02_Use_JS_in_JSX";
import Login, { Setting, UserKey } from "./../src/Components/00_userComponent";
import { Profile } from "./../src/Components/00_userComponent";
import Statefruit, { Counter } from "./Components/03_hooks";
import Toggle, { MultiCondition } from './Components/04_toggleComp';
import User, { Wrapper } from './Components/05_props'
import InputText from "./Components/06_Get_input_field_value";
import Control_comp from "./Components/07_Control_Component";
import Handle_checkbox from "./Components/08_Handle_checkbox";
import HandleRadiobuttonAndDropdown from "./Components/09_Handle_radiobutton_and_dropdown";
import LoginForm from "./Components/LoginFrom";
// This is called Function Component bcz we write function here that reason we called function component there is one 
// more type of component which is class component where we write class
function App() { // App Component : component first letter is always capital

  // let name = "kishan", age = 20,country = 'India';
  return (
    <>
      {/* <h1>This is Kishan</h1>
      <Fruit/> 
      <Fruit></Fruit>
      <Login/>
      <Profile/>
      <Setting/>
      <ToDo/> */}
      {/* From 02 */}
      {/* <VariableUse/>
      <Statefruit/>
      <Counter/>
      <Toggle/>
      <MultiCondition/>
      <User name = {name} age = {age} country = {country} />
      <Wrapper>
          <p>This is Wrapper</p>
      </Wrapper>
      <InputText/>
      <Control_comp/> */}
      {/* <Handle_checkbox/> */}
      {/* <HandleRadiobuttonAndDropdown/> */}
      <LoginForm/>
    </>
  )
}

function Fruit() {
  return (
    <>
      <h1>This is Fruit Component</h1>
      <p>{UserKey}</p>
    </>
  );
}
export default App;
// export default Fruit;
