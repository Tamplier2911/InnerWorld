import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { openInfoBar } from '../../redux/infobar/infobar.actions.js';

// mui
import { Box, Typography } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // open infobar
    this.props.openInfoBar({
      message: error.message || 'You likely experienced connection issues!',
      severity: 'error',
    });
  }

  errorBoundaryStyles(theme) {
    return {
      container: {
        height: '85vh',
        display: 'flex',
        padding: '8px 0px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        fontSize: '5rem',
      },
      text: {
        textAlign: 'center',
      },
    };
  }

  render() {
    const { hasErrored } = this.state;
    const { container, icon, text } = this.errorBoundaryStyles();

    if (hasErrored) {
      return (
        <Box style={container} component="div">
          <ErrorOutline style={icon} color="secondary" fontSize="large" />
          <Typography style={text} variant="h3" component="h3">
            Something went terribly wrong!
          </Typography>
          <ErrorOutline style={icon} color="secondary" fontSize="large" />
        </Box>
      );
    } else {
      return this.props.children;
    }
  }
}

export default connect(null, { openInfoBar })(ErrorBoundary);
