import React, { useState, useEffect } from "react";
import { TextInput, Button, Select, Table } from "@mantine/core";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

import "./viewuser.css";

const ViewUserForm = () => {
  const [userData, setUserData] = useState({
    Search: "",
    FilterByUser: "",
    FilterByStatus: "",
  });

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/users", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsersData(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Data:", userData);
  };

  const handleClearfilter = () => {
    setUserData({
      Search: "",
      FilterByUser: "",
      FilterByStatus: "",
    });
  };

  const handleDelete = (userId) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsersData((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  /////////////////////
  const handleUpdate = (userId) => {
    const token = localStorage.getItem("token");
    navigate("/add-user", {
      state: {
        user: userData,
      },
    });

    const updatedData = {
      lastName: "New Last Name",
    };

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User updated:", data);

        const updatedUsersData = usersData.map((user) =>
          user._id === userId
            ? { ...user, lastName: updatedData.lastName }
            : user
        );
        setUsersData(updatedUsersData);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  //////////////////

  const filteredData = usersData.filter((row) => {
    const fullNameMatches =
      row.firstName &&
      (row.firstName.toLowerCase().includes(userData.Search.toLowerCase()) ||
        row.email.toLowerCase().includes(userData.Search.toLowerCase()));

    const userTypeMatches =
      !userData.FilterByUser ||
      (row.userType && row.userType === userData.FilterByUser);

    return fullNameMatches && userTypeMatches;
  });

  const PDFDocument = ({ usersData }) => (
    <Document>
      <Page>
        <Text>View Users</Text>
        {usersData.map((row) => (
          <Text>{row.email}</Text>
        ))}
      </Page>
    </Document>
  );

  return (
    <div className="heading">
      <div className="head">
        <Text>View Users</Text>
      </div>
      <div className="subhead">
        <Text>View Details of all the Users added in the system</Text>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="top">
          <div className="search">
            <TextInput
              placeholder="Search"
              required
              value={userData.Search}
              onChange={(event) =>
                setUserData({ ...userData, Search: event.target.value })
              }
            />
          </div>
          <div className="byuser">
            <Select
              placeholder="Filter By Users"
              data={[
                { value: "User", label: "User" },
                { value: "Admin", label: "Admin" },
              ]}
              value={userData.FilterByUser}
              onChange={(value) =>
                setUserData({ ...userData, FilterByUser: value })
              }
            />
          </div>
          <div className="bystatus">
            <Select
              placeholder="Filter By Status"
              data={[
                { value: "Pending", label: "Pending" },
                { value: "Active", label: "Active" },
                { value: "Block", label: "Block" },
              ]}
              value={userData.FilterByStatus}
              onChange={(value) =>
                setUserData({ ...userData, FilterByStatus: value })
              }
            />
          </div>

          <div className="buttonone">
            <Button type="button" onClick={handleClearfilter}>
              Clear Filter
            </Button>{" "}
          </div>
        </div>
        <div className="download">
          {filteredData.length > 0 && (
            <PDFDownloadLink
              document={<PDFDocument usersData={filteredData} />}
              fileName="user_list.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Generating PDF..." : "Download PDF"
              }
            </PDFDownloadLink>
          )}
        </div>
        <div className="table-container">
          <Table>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Full name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{`${row.firstName} ${row.lastName}`}</td>
                  <td>{row.email}</td>
                  <td>{row.userType}</td>

                  <td>
                    <Button
                      variant="outline"
                      color="orange"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </td>

                  <td>
                    <Button
                      variant="outline"
                      color="black"
                      onClick={() => handleUpdate(row._id)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </form>
    </div>
  );
};

export default ViewUserForm;
