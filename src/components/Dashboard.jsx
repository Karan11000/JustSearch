import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import File from "./File"
import Folder from "./Folder"
import Navbar from "./Navbar"
import {useFolder} from "../hooks/useFolder"
import { useParams, useLocation } from "react-router-dom"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import "./style.css"

  


function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
    
    const { currentUser} = useAuth()
    
    return (
      <>
      <div className="">
         <Navbar />
         <Container fluid>
         <div className=" d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
         </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
         {console.log("bewra")}
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
         </Container>

              </div>
         
        {/* <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser?.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      </div>
            </div>
        </div> */}
      </>
    )
}

export default Dashboard;