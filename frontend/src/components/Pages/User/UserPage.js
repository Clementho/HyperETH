import React from "react"; 
import StickyHeadTable from "./Table/Table";
import { Box, Grid, TextField, Avatar, IconButton, Divider, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const User = () =>  { 
  return ( 
  <div>
    <Box margin="auto" width="90%" sx={{ flexGrow: 0, position: "relative"}}>
                        <img 
                            src="resources/profile-banner.png" 
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                            }}
                        />

                        <IconButton  sx={{ 
                            padding: 0,
                            position: "absolute",
                            bottom: "-30px",
                            left: "30px",
                            zIndex: 1,
                            "&:hover": {
                                "& .edit-icon": {
                                    display:"initial"
                                },
                            }
                        }}>
                            
                            <Avatar alt="Remy Sharp" src="/resources/profile-image.png" sx={{ width: 110, height: 110 }}/>
                            <EditIcon
                                className="edit-icon"
                                fontSize="large"
                                sx={{
                                    display: "none",
                                    position: "absolute",
                                    color: "#FFFFFF",
                                }}
                            />
                        </IconButton>
                    </Box>
    <StickyHeadTable/> 
  </div>
  )
}
export default User ;

