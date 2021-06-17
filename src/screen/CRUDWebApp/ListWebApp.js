import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "../../componets/banner/Banner";
import bg from '../../assets/images/banners/about.jpg'
import Heading from "../../componets/Heading";





const ListWebApp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])

    const [WebApps, setWebApps] = useState([]);

    useEffect(() => {
        // console.log("Hello React");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/WebApps");
        setWebApps(result.data.reverse()); // latest data first show
        // console.log(result);
    };

    // Delete User
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/WebApps/${id}`);
        loadUsers();
    };

    return (
        <div className="">

            <Banner
                title="Web Application"
                image={bg}
            />

            <Heading titleGray='Websites' titleBlack='List' titleBlue='Web App' />


            <div className='container pb-40'>
                <Link className="btn btn-primary mr-2 mb-30" to={`/AddWebApp/add`}>
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
                        {WebApps.map((webApp, key) => (
                            <tr>
                                <th scop="row">{key + 1}</th>
                                <td>{webApp.appName}</td>
                                <td>{webApp.appDetail}</td>
                                {/* <td> {URL.createObjectURL(webApp.appImage) }</td> */}
                                <td> <img src={webApp.appImage} style={{width: 100}}  /> </td>
                                {/* <td>{webApp.address.street}</td> */}
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/WebApps/${webApp.id}`}>
                                        View
                </Link>
                                    <Link
                                        className="btn btn-primary mr-2"
                                        to={`/EditWebApp/edit/${webApp.id}`}
                                    >
                                        Edit
                </Link>
                                    <Link
                                        className="btn btn-danger"
                                        onClick={() => deleteUser(webApp.id)}
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

export default ListWebApp;
