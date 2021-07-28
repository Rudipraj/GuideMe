import React from 'react';
import './Signup.css';

const Signup = () => {
    return(
        <>
        <div className="form-container">
        <h2>Confirm Your Identity</h2>
            <div className="input-fields">
                <label for="Firstname" className="userinfo">FirstName:</label>
                <input type="name" value="" className="inputname" placeholder="first_name" />
                <br />

                <label for="Lastname" className="userinfo">Lastname:</label>
                <input type="name" value="" className="inputname" placeholder="last_name"/>
                <br />
                <label for="email" className="userinfo">Email:</label>
                <input type="name" value="" className="inputname" placeholder="www.abc@gmail.com" />
                <br />
                <label for="phone" className="userinfo">Phone:</label>
                <input type="name" value="" className="inputname" placeholder="9800000000"/>
                <br />
                <label for="address" className="userinfo">Address:</label>
                <input type="name" value="" className="inputname" placeholder="221B|Baker Road Street"/>
                <br />
                <label for="img" className="userinfo">Provide Citizenship:</label>
                <input type="file" id="img" name="img" accept="image/*" className="inputname" />
                <br/>
                <button type='submit' className="submit-button">Submit</button>
                
                </div>
                
                
                
        </div>
        </>
    )
}
export default Signup;