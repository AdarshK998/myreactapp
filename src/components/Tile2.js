import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 8,
  },
  tab:{
    backgroundColor:"red",
  },
});

export default function Tile2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>

       <pre> 
    <Paper p={1} className={classes.root} style= {{display: 'flex', flexdirection: 'row',flexGrow: 134 }}  >
    <form 
    style={{paddingLeft:41}}
    >
          <label>
          Upload the .csv file:
          <input
            name="data"
            type="file" 
            />
        </label>
      </form>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        position='center'
        style={{position : 'absolute', left: 633}}
      >
        <Tab label="Binary Classification"  default={true}  />
        <Tab label="Regression" style={{marginLeft:44}} />
      </Tabs>
    </Paper>
    </pre>
    </div>
  );
}
