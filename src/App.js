
import './App.css';

function App() {
  return (
    
    <div class='container'>
      <h1 >Registration Form </h1>
      <form name="registration" class="registartion-form" >
        <table>
          <tr>
            <td><label for="name">Name:</label></td>
            <input type="text" name="name" id="name" placeholder="your name"></input>
          </tr>
          <tr>
            <td><label for="name">Date of Birth:</label></td>
            <input type="date" name="name" id="name" placeholder="your name"></input>
          </tr>
          <tr>
              <td><label for="number">Class</label></td>
              <td>
                <select name="number" id="classnom" type="I">
                  <option value=""></option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                  <option value="5">V</option>
                  <option value="6">VI</option>
                  <option value="7">VII</option>
                  <option value="8">VIII</option>
                  <option value="9">IX</option>
                  <option value="10">X</option>
                  <option value="10">X11</option>
                  <option value="10">X12</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label for="text">Division</label></td>
              <td>
                <select name="text" id="Division">
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                 
                </select>
              </td>
            </tr>
           <tr>
           
           
           <label for="gender">Gender:</label>
           
          <td> <input type="radio" name="gender" value="male" />
           <label For="male">Male</label>
           </td>
           
           <input type="radio" name="gender" value="female" />
           <label For="female">Female</label>
          

           </tr>
             


            <tr>
              <td colspan="2"><input type="submit" class="submit" value="Register" /></td>
            </tr>


        </table>

      </form>




    </div>





  );
}

export default App;
