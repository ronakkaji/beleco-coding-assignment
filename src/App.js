import React, { Component } from 'react';
import './App.css';

import AddedFurnitureComponent from './AddedFurnitureComponent';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      furnitures : [
        { id: 1, name: 'Green Couch', material: 'Leather', condition: 'New' }
      ],
      name: '',
      material: '',
      condition: ''
    };
  }

  render() {
     return (
      <div className="App">
        <img height="200" width="200" src="logo.svg" alt="Beleco Market Logo"></img>
        <Grid container justify="center" alignItems="center" spacing={24}>
          <Grid item xs={6}>
            <Paper>
                <h2> Add new furniture </h2>
                <form noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Name"
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                  />

                  <TextField
                    id="material"
                    label="Material"
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    value={this.state.material}
                    onChange={this.handleChange.bind(this)}
                  />

                  <TextField
                    id="condition"
                    label="Condition"
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    value={this.state.condition}
                    onChange={this.handleChange.bind(this)}
                  />
                  
                  <Grid container justify="center">
                    <Button style={{ margin: '1rem' }} variant="contained" color="secondary" onClick={this.onAdd.bind(this)}>
                      Add
                    </Button>
                  </Grid>
                </form>
            </Paper>
              
            <AddedFurnitureComponent furnitures={this.state.furnitures} />
           </Grid>
        </Grid>
      </div>
    );
  }
  
  onAdd() {
    const furnitures = this.state.furnitures;
    furnitures.push({
      id: ++furnitures.length,
      name: this.state.name,
      material: this.state.material,
      condition: this.state.condition
    });

    this.setState({
      furnitures: furnitures,
      name: '',
      material: '',
      condition: '',
    });
  }

  handleChange(event){
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }
}

export default App;
