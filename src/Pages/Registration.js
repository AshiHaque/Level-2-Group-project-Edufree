import React from 'react'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Registration() {
  return (
    <div>
       <div className="mb-2">
    <Button variant="primary" size="lg">
      Large button
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </div>
  <div>
    <Button variant="primary" size="sm">
      Small button
    </Button>{' '}
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </div>
    </div>
  )
}

export default Registration
