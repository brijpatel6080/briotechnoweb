import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "../../componets/banner/Banner";
import bg from '../../assets/images/banners/about.jpg'
import Heading from "../../componets/Heading";





const ListMobileApp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])

    const [mobileApps, setmobileApps] = useState([]);

    useEffect(() => {
        // console.log("Hello React");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/mobileApps");
        setmobileApps(result.data.reverse()); // latest data first show
        // console.log(result);
    };

    // Delete User
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/mobileApps/${id}`);
        loadUsers();
    };

    return (
        <div className="">

            <Banner
                title="Mobile Application"
                image={bg}
            />

            <Heading titleGray='Mobile App' titleBlack='List' titleBlue='Mobile App' />


            <div className='container pb-40'>
                <Link className="btn btn-primary mr-2 mb-30" to={`/AddMobileApp/add`}>
                    Add New
                </Link>

                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">App Name</th>
                            <th scope="col">App Description</th>
                            <th scope="col">App Image</th>
                            {/* <th scope="col">Address</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mobileApps.map((mobileApp, key) => (
                            <tr>
                                <th scop="row">{key + 1}</th>
                                <td>{mobileApp.appName}</td>
                                <td>{mobileApp.appDetail}</td>
                                {/* <td> {URL.createObjectURL(mobileApp.appImage) }</td> */}
                                <td> <img src={mobileApp.appImage} style={{width: 100}}  /> </td>
                                {/* <td>{mobileApp.address.street}</td> */}
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/mobileApps/${mobileApp.id}`}>
                                        View
                </Link>
                                    <Link
                                        className="btn btn-primary mr-2"
                                        to={`/EditMobileApp/edit/${mobileApp.id}`}
                                    >
                                        Edit
                </Link>
                                    <Link
                                        className="btn btn-danger"
                                        onClick={() => deleteUser(mobileApps.id)}
                                    >
                                        Delete
                </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default ListMobileApp;
