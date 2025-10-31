import React, { useState } from "react";


const Form = () => {
    //! set states
    const [formData, setFormData] = useState([]);
    const [values, setValues] = useState({
        name: "",
        schoolName: "",
        marks: "",
        email: "",
        phone: "",
        course: ""
    })
    const [showTable, setShowTable] = useState(false);

    //! destrcuture values
    const {name, schoolName, marks, email, phone, course} = values;

    //! handle input changes
    const handleChanges = (event) => {
       const {name, value} = event.target;
       setValues((prevValues) => ({
        ...prevValues,
        [name]: value // name = name, schoolname ...    /// values = kaustav, LPS ...
       }))
    }

    //! handle submission
    const handleSubmit = () => {
        if(!name || !schoolName || !marks || !email || !phone || !course ) {
            alert('Please fill out all fields');
            return;
        }
        
        
        const data = {name, schoolName, marks, email, phone, course};
        setFormData((prevData) => [
            ...prevData,
            data
        ])
        setValues({
            name: "",
            schoolName: "",
            marks: "",
            email: "",
            phone: "",
            course: ""
        })
    
    }

    const handleGoBack = () => setShowTable(false);

    if(!showTable){
        return(
            <div>
                <div>
                    <label>Name of the Student: </label>
                    <input
                        type='text'
                        name="name"
                        placeholder="Name"
                        onChange={handleChanges}
                        value={name}
                    />
                </div>
                <div>
                    <br></br>
                    <label>School Name: </label>
                    <input
                        type='text'
                        name='schoolName'
                        placeholder="School Name"
                        onChange={handleChanges}
                        value={schoolName}
                    />
                </div>
                <div>
                    <br></br>
                    <label>Marks in XII: </label>
                    <input
                        type='number'
                        name="marks"
                        placeholder="Enter Marks"
                        onChange={handleChanges}
                        value={marks}
                    />
                </div>
                <div>
                    <br></br>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChanges}
                        value={email}
                    />
                </div>
                <div>
                    <br></br>
                    <label>Number: </label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Number"
                        onChange={handleChanges}
                        value={phone}
                    />
                </div>
                <div>
                    <br></br>
                    <label>Courses: </label>
                    <select name='course' value={course} onChange={handleChanges}>
                        <option value='BSc'>BSc</option>
                        <option value='B.Tech'>B.Tech</option>
                        <option value='B.Com'>B.Com</option>
                        <option value='Economics hons'>Economoics Hons.</option>
                    </select>
                </div>
                <div>
                    <br></br>
                    <button onClick={handleSubmit}>Submit Form</button>
                </div>
            </div>
        )
    }

};




export default Form