import React, { useState } from 'react'
import './Calculator.css'
function Header() {
    const [result, setResult] = useState('')


    // function display(input) {
    //     document.getElementById('output').value += input; //concatenate the input
    // }

    function clear() {
        document.getElementById('output').value = "";
    }

    const handleInput = e => {
        const buttonValue = e.target.value;
        document.getElementById('output').value += buttonValue;
        //some logic
    }

    function calculate() {

        document.getElementById('output').value = setResult(eval(document.getElementById('output').value))
    }
    const display = (e) => { handleInput(e, "value") }
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
                    <td> <input type="button" class="op" value="+" onClick={display} />
                    </td>
                    <td> <input type="button" class="op" value="-" onClick={display} />
                    </td>
                    <td> <input type="button" class="op" value="*" onClick={display} />
                    </td>
                    <td> <input type="button" class="op" value="/" onClick={display} />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="7" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="8" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="9" onClick={display} />
                    </td>
                    <td> <input type="button" class="op" value="%" onClick={display} />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="4" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="5" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="6" onClick={display} />
                    </td>
                    <td rowspan="3"><input type="button" class="equals" value="=" onClick={calculate} />
                    </td>

                </tr>
                <tr>
                    <td> <input type="button" class="button" value="1" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="2" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="3" onClick={display} />
                    </td>
                </tr>
                <tr>
                    <td> <input type="button" class="button" value="0" onClick={display} />
                    </td>
                    <td> <input type="button" class="button" value="." onClick={display} />
                    </td>
                    <td> <input type="button" class="equals" value="C" onClick={clear} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Header;