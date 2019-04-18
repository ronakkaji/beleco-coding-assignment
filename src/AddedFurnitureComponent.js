import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import "./AddedFurnitureComponent.css";

class AddedFurnitureComponent extends Component {
  render() {
    return (
      <Paper>
        <h2> Added furniture </h2>
        <List>
          <TransitionGroup className="furniture-list">
            {this.props.furnitures.map((item) => {
              return (
                <CSSTransition key={item.id} timeout={500} classNames="item">
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            Material - {item.material}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Condition - {item.condition}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem> 
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </List>
      </Paper>
    );
  }
}

AddedFurnitureComponent.propTypes = {
  furnitures: PropTypes.array
};

export default AddedFurnitureComponent;