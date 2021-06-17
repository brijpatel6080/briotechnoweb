import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Banner from "../../componets/banner/Banner";
import bg from '../../assets/images/banners/about.jpg'
import Heading from "../../componets/Heading";
const AddWebApp = () => {
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
    const [appLink, setappLink] = useState('')
    const [appLanguage, setappLanguage] = useState('')
    const [appImage, setappImage] = useState(null)
    const [ImageHome, setImageHome] = useState(null)

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
    const handleChangeImageHome = (event) => {
        setImageHome(
            URL.createObjectURL(event.target.files[0])
        )
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // alert(appName)
        await axios.post("http://localhost:3001/WebApps", {appName, appLink, appLanguage, appDetail, appImage, ImageHome}); // Data store
        history.push("/"); // After submit data redirect to home page
    };

    return (
        <>
            <Banner
                title="Add Website"
                image={bg}
            />
            <div className="container pb-50">
                <div className="w-75 mx-auto shadow p-5 ">
                    <Heading titleGray="Add New" titleBlack="Add" titleBlue="Website" />
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Website Name"
                                name="appName"
                                value={appName}
                                onChange={(e) => setappName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Website Description"
                                name="appDetail"
                                value={appDetail}
                                onChange={(e) => setappDetail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Website Link"
                                name="appLink"
                                value={appLink}
                                onChange={(e) => setappLink(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Website usege Languages "
                                name="appLanguage"
                                value={appLanguage}
                                onChange={(e) => setappLanguage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                        <lable>Thumbnail Image</lable>
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
                        <div className="form-group">

                            <lable>Home Page Image</lable>

                            {ImageHome != null && <img src={ImageHome} height='150' />   }

                            { console.log('ImageHome==', ImageHome )}

                            <input
                                
                                type="file"
                                className="form-control form-control-lg"
                                // placeholder="Enter Your image"
                                name="ImageHome"
                                //   value={image}
                                onChange={handleChangeImageHome}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add Data</button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default AddWebApp;
