import { Grid, InputLabel, TextareaAutosize, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import { Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const ToDoForm = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Grid container>
      <Formik
        initialValues={{
          title: "",
          description:"",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Title is required.')
            .trim()
            .min(2, 'Title must be at least two characters.'),
          description: Yup.string()
            .required('Description is required.')
            .trim()
            .min(2, 'Description must be at least two characters.'),
          })}
        onSubmit={(values) => {
          setTodos([...todos, values]);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              background: 'white',
              padding: '2rem',
              margin: '2rem',
              display: 'flex',
              flexDirection: 'column',
              width: '500px',
              gap: '2rem',
              borderRadius: '10px',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            <Grid item>
            <InputLabel>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Enter title
              </Typography>
            </InputLabel>
            <TextField
              sx={{width:"100%"}}
              label="Title"
              variant="outlined"
              placeholder="Swikriti Sharma"
              {...formik.getFieldProps('title')}
            />

            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: 'red' }}>{formik.errors.title}</div>
            ) : null}
            </Grid>

            <Grid item>
            <InputLabel>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Enter description
              </Typography>
            </InputLabel>
            <TextareaAutosize
            style={{width:"100%", height:"200px"}}
              label="Title"
              variant="outlined"
              maxRows={5}
              {...formik.getFieldProps('title')}
            />

            {formik.touched.description && formik.errors.description ? (
              <div style={{ color: 'red' }}>{formik.errors.description}</div>
            ) : null}
            </Grid>


            <Button
              variant="contained"
              type="submit"
              sx={{ width: '50%', alignSelf: 'center' }}
            >
              Add Todo
            </Button>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default ToDoForm;
