import React, { useState } from 'react'
import './Calculator.css'
function Header() {
    const [result, setResult] = useState('')
    

    function display(input) {
        document.getElementById('output').value += input; //concatenate the input
    } 

    function clear() {
        document.getElementById('output').value = "";
    }

    const handleInput = e => {
        const buttonValue = e.target.value;
        document.getElementById('output').value += buttonValue;
        //some logic
    }

    function calculate(){

        document.getElementById('output').value=setResult(eval(document.getElementById('output').value))
    }

    return (
        <div>
            <table class="calculator" cellspacing="0">
                <tr>
                    <td id="heading" colspan="4">Simple Calculator</td>
                </tr>
                <tr>
                    <td colspan="4"> <input type="text" class="display" id="output" value={result} />
                    </td>

                </tr>
                <tr>
                    <td> <input type="button" class="op" value="+" onClick={e => handleInput(e, "value")}  />
                    </td>
                    <td> <input type="button" class="op" value="-"  />
                    </td>
                    <td> <input type="button" class="op" value="*" />
                    </td>
                    <td> <input type="button" class="op" value="/"  />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="7" onClick={e => handleInput(e, "value")} />
                    </td>
                    <td> <input type="button" class="button" value="8" onClick={e => handleInput(e, "value")} />
                    </td>
                    <td> <input type="button" class="button" value="9"  />
                    </td>
                    <td> <input type="button" class="op" value="%" />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="4"  />
                    </td>
                    <td> <input type="button" class="button" value="5"  />
                    </td>
                    <td> <input type="button" class="button" value="6"  />
                    </td>
                    <td rowspan="3"><input type="button" class="equals" value="=" onClick={calculate} />
                    </td>

                </tr>
                <tr>
                    <td> <input type="button" class="button" value="1"   />
                    </td>
                    <td> <input type="button" class="button" value="2"  />
                    </td>
                    <td> <input type="button" class="button" value="3"  />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="0" />
                    </td>
                    <td> <input type="button" class="button" value="."  />
                    </td>
                    <td> <input type="button" class="equals" value="C" onClick={clear} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Header;