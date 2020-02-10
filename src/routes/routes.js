import React from 'react';

const routes = (
  <React.Fragment>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/help" component={Help}/>
  <Route exact path="/articles" component={Articles}/>
  <Route exact path="/articles/new" component={New}/>
  <Route exact path="/articles/:id" component={Show}/>
  <Route exact path="/articles/:id/edit" component={Edit}/>
  </React.Fragment>
)

export default routes
