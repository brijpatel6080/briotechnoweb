import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Banner from "../../componets/banner/Banner";
import bg from '../../assets/images/banners/about.jpg'
import Heading from "../../componets/Heading";
const AddMobileApp = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])

    let history = useHistory();

    //   const [MobileApp, setappName] = useState({
    //     appName: "",
    //     appDetail: "",
    //     image: "",
    //   });

    const [appName, setappName] = useState('')
    const [appDetail, setappDetail] = useState('')
    const [appImage, setappImage] = useState(null)

    //   const { appName, appDetail, image } = appName;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setappName({ ...appName, [e.target.appName]: e.target.value });
    };

    const handleChange = (event) => {
        setappImage(
            URL.createObjectURL(event.target.files[0])
        )
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // alert(appName)
        await axios.post("http://localhost:3001/mobileApps", {appName, appImage, appDetail}); // Data store
        history.push("/"); // After submit data redirect to home page
    };

    return (
        <>
            <Banner
                title="Add Mobile Application"
                image={bg}
            />
            <div className="container pb-50">
                <div className="w-75 mx-auto shadow p-5 ">
                    <Heading titleGray="Add New" titleBlack="Add" titleBlue="Mobile App" />
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Mobile Application Name"
                                name="appName"
                                value={appName}
                                onChange={(e) => setappName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Mobile App Description"
                                name="appDetail"
                                value={appDetail}
                                onChange={(e) => setappDetail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">

                            {appImage != null && <img src={appImage} height='150' />   }

                            { console.log('appImage==', appImage )}

                            <input

                                type="file"
                                className="form-control form-control-lg"
                                // placeholder="Enter Your image"
                                name="appImage"
                                //   value={image}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add Data</button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default AddMobileApp;
