import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';

const Heading = styled.h3`
    margin-left: 20px;
`

const BusinessWrapper = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
`

const status = [
    {
      value: 'active',
      label: 'ACTIVE',
    },
    {
      value: 'paused',
      label: 'PAUSED',
    },
    {
      value: 'deactivated',
      label: 'DEACTIVATED',
    },
  ];

  const demoData = [
    {
      businessName: "Oasis Hub",
      status: "ACTIVE",
      mPesaTillNumber: "123456",
      businessEmail: "jone@doe.com",
      businessPhoneNumber: "0712345678",
      salesperson: "0712345678",
      paymentStatus: [
        { dueDate: "MM/DD/YYYY", plan: "PAYG-6%", amount: "KSH 0", status: "TRIAL" },
      ]
    },
    {
        businessName: "Oasis Hub 2",
        status: "PAUSED",
        mPesaTillNumber: "123456789789",
        businessEmail: "jone@doe.com",
        businessPhoneNumber: "0712345678",
        salesperson: "0712345678",
        paymentStatus: [
          { dueDate: "MM/DD/YYYY", plan: "PAYG-6%", amount: "KSH 0", status: "TRIAL" },
        ]
      },

  ];

  const toNormalText = (camelCaseText) => {
    return camelCaseText
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };


const Business = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);

    const handleSearchClick = () => {
        setShowResults(true);
        setCurrentBusinessIndex((prevIndex) => (prevIndex + 1) % demoData.length);
    }

    const getStatusButtonColor = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return 'green';
            case 'paused': return 'yellow';
            case 'deactivated': return 'red';
            default: return 'grey';
        }
    };

    return (
        <>
    <BusinessWrapper>
    <Heading>Business Control</Heading>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: '350px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name Search" variant="outlined"/>
      <TextField
          id="outlined-select-status"
          select
          label="Status"
          defaultValue="ACTIVE"
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" onClick={handleSearchClick} style={{
            backgroundColor: "#f7bfbf",
            color: "black",
            width: "350px",
            height: "40px",
            border: "1px solid black"
        }}>Search</Button>
    </Box>
    <Divider width="350px" color="black" style={{marginBlock: "20px"}}/>
    </BusinessWrapper>

    {showResults && (
                <BusinessWrapper>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
                    <Button disabled
                            style={{
                                backgroundColor: getStatusButtonColor(demoData[currentBusinessIndex].status),
                                color: "black",
                                marginTop: '8px',
                            }}
                            fullWidth
                        >
                            {demoData[currentBusinessIndex].status}
                        </Button>
                        {Object.entries(demoData[currentBusinessIndex]).map(([key, value]) => {
                            if (key === 'status' || key === 'paymentStatus') {
                                return null;
                            }
                            return (
                                <TextField
                                    key={key}
                                    label={toNormalText(key)}
                                    value={value}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    margin="normal"
                                />
                            );
                        })}
                    </Box>
                                <TableContainer component={Paper} sx={{ marginTop: 1 }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="payment status table">
                                    <TableHead>
                                        <TableRow>
                                        {Object.keys(demoData[currentBusinessIndex].paymentStatus[0]).map((key) => (
                                            <TableCell key={key}>{toNormalText(key)}</TableCell>
                                        ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {demoData[currentBusinessIndex].paymentStatus.map((status, index) => (
                                        <TableRow key={index}>
                                            {Object.values(status).map((value, valueIndex) => (
                                            <TableCell key={valueIndex}>{value}</TableCell>
                                            ))}
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    </Table>
                                </TableContainer>
                </BusinessWrapper>
                
            )}
        </>
    );
};
 
export default Business;