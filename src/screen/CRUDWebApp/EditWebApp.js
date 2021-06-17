import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Banner from "../../componets/banner/Banner";
import bg from '../../assets/images/banners/about.jpg'
import Heading from "../../componets/Heading";

const EditWebApp = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth"
    });
  }, [])


  let history = useHistory(); // for path set
  const { id } = useParams(); // get id for edit
  //   alert(id);


  // const [mobileApp, setmobileApp] = useState({
  //   appName: "",
  //   appDetail: "",
  //   appImage: "",

  // });


  const [appName, setappName] = useState('')
  const [appDetail, setappDetail] = useState('')
  const [appImage, setappImage] = useState(null)


  // const { appName, appDetail, appImage } = mobileApp;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setappName({ ...appName, [e.target.appName]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/WebApps/${id}`,  {appName, appImage, appDetail}); // Data update
    history.push("/"); // After submit data redirect to home page
  };

  useEffect(() => {
    loadUser();
  }, []);

  // For Edit Data
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/WebApps/${id}`); // Selected id data show
    setappName(result.data); // data set in inputs
    // setmobileApp(result.data); // data set in inputs
    console.log("result==", result);
  };

  return (

    <>

      <Banner
        title="Edit Web Application"
        image={bg}
      />

      <div className="container pb-50">

        <Heading titleGray="Websites" titleBlack="Edit" titleBlue="Web Application" />

        <div className="w-75 mx-auto shadow p-5 pt-0">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="App Name"
                name="appName"
                value={appName}
                // onChange={(e) => onInputChange(e)}
                onChange={(e) => setappName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="App Description"
                name="appDetail"
                value={appDetail}
                // onChange={(e) => onInputChange(e)}
                onChange={(e) => setappDetail(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
            //   placeholder="Enter Your E-mail"
              name="appImage"
              value={appImage}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}

            <button className="btn btn-warning btn-block">Update Web App</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default EditWebApp;
