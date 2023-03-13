import React from 'react';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button, Grid } from '@mui/material';
import { addCommands } from '../../api/spyder';
import { getInitialValues, Schema } from './utils';
import styles from './Create.module.css';

export default function CreateCommand({ element }){
    const isUpdate = !!element._id;

    const addCommand = async (values) => {
      const host = location.href;
      const type = values.type;
      const actionClass = values.actionClass;
      const url = values.url;

      const payload = {
        type,
        host,
      }

      if (type === 'link') {
        payload.links = [{
          label: values.label,
          url,
          actionClass
        }]
      }
      if (type === 'actionable') {
        payload.actions =  [{
          label: values.label,
          actionClass
        }]
      }
      // host, links = [], actions = [],

      await addCommands(payload);
      refresh();
    }

    return (
        <div className={styles.form}>
          <Formik
            validationSchema={Schema}
            initialValues={getInitialValues(element)}
            onSubmit={addCommand}
          >
            {({
              values,
              handleSubmit,
            }) => (
              <Grid container spacing={1}>
                {isUpdate && (
                  <Grid item xs={12}>
                    <Field
                      label="Path"
                      type="text"
                      component={(props) => <TextField fullWidth {...props} />}
                      name="path"
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Field
                    label="Name of command"
                    type="text"
                    name="label"
                    component={(props) => <TextField fullWidth {...props} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={styles.flex} role="group" aria-labelledby="my-radio-group">
                    <Grid item xs={2}>
                      Type
                    </Grid>
                    <Grid item xs={3}>
                      <Field type="radio" name="type" value="link" />
                      Link
                    </Grid>
                    <Grid item xs={4}>
                      <Field type="radio" name="type" value="actionable" />
                      Actionable
                    </Grid>
                  </div>
                </Grid>
                {values.type === 'link' && (
                  <Grid item xs={12}>
                    <Field
                      label="link URL (optional)"
                      type="text"
                      name="url"
                      component={(props) => <TextField fullWidth {...props} />}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Field
                    label="Class names of command"
                    type="text"
                    name="actionClass"
                    component={(props) => <TextField fullWidth {...props} />}
                  />
                </Grid>
                <div className={styles.submit}>
                  <Button onClick={handleSubmit} variant="contained"> Create </Button>
                </div>
              </Grid>
            )}
          </Formik>
        </div>
    )
}