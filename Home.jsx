import React, { useEffect, useState } from 'react';
import { MDBInput, MDBBtn, MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit';
import './Home.css';
import { Link } from 'react-router-dom';
import { addTaskAPI, getTaskAPI, TaskdeleteAPI } from '../../Services/allAPI';
import Swal from 'sweetalert2';
import { AiOutlineDelete } from "react-icons/ai";

const Home = () => {
  const [TaskName, setTaskName] = useState("");
  const [TaskDetail, setTaskDetail] = useState("");
  const [TaskDetails, setTaskDetails] = useState([]);

  const handleAddTask = async (e) => {
    e.preventDefault(); // Prevent form default submit behavior
    const body = {
      Title: TaskName,
      TaskDetail: TaskDetail
    };
    try {
      if (TaskName && TaskDetail) {
        const result = await addTaskAPI(body);
        if (result.status === 201) {
          Swal.fire({
            title: "Success!",
            text: "Task added successfully",
            icon: "success",
            confirmButtonText: "Back"
          });
          handleGetTask();
          setTaskName("");
          setTaskDetail("");
        } else {
          Swal.fire({
            title: "Error!",
            text: result.message,
            icon: "error",
            confirmButtonText: "Back"
          });
        }
      } else {
        Swal.fire({
          title: "Error!",
          text: "Please fill in both the title and details",
          icon: "error",
          confirmButtonText: "Back"
        });
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleGetTask = async () => {
    try {
      const result = await getTaskAPI();
      if (result.status >= 200 && result.status < 300) {
        setTaskDetails(result.data);
      } else {
        console.log("Error fetching tasks:", result.message);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const result = await TaskdeleteAPI(id);
      if (result.status >= 200 && result.status < 300) {
        Swal.fire({
          title: "Success!",
          text: "Task deleted successfully",
          icon: "success",
          confirmButtonText: "Back"
        });
        handleGetTask();
      } else {
        Swal.fire({
          title: "Error!",
          text: result.message,
          icon: "error",
          confirmButtonText: "Back"
        });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    handleGetTask();
  }, []);

  return (
    <div id="hbody">
      <MDBNavbar expand="lg" light bgColor="black">
        <MDBContainer>
          <MDBNavbarNav className="d-flex flex-row">
            <MDBNavbarItem className=" sticky-md-top ms-auto fs-5">
              <Link to={"/"}>
                <MDBIcon fas icon="home" /> / Land Page
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      

      <div className="p-5  d-flex  ">
        <div className=" card col-4 ms-5 p-4 shadow justify-content-center ">
          <form onSubmit={handleAddTask}>
            <h3 className="text-center text-info">Add to Taskbar</h3>
            <MDBInput
              value={TaskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="mb-4"
              type="text"
              label="Title"
            />
            <MDBInput
              value={TaskDetail}
              onChange={(e) => setTaskDetail(e.target.value)}
              className="mb-4 text-secondary"
              type="text"
              label="Description"
            />
            <MDBBtn type="submit" block>
              Add Task
            </MDBBtn>
          </form>
        </div>

        <div className="col-5 ms-5 p-5 d-flex  ">
          {TaskDetails.map((item) => (
            <div key={item.id} className="m-5  shadow bg-white border border-5 p-3">
              <h4 className="me-5 text-center  ">{item.Title}</h4>
              <p className=" me-5  mt-2 ms-4  ">{item.TaskDetail}</p>
              <AiOutlineDelete 
                onClick={() => handleDeleteTask(item.id)}
                className="text-danger fs-2  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
