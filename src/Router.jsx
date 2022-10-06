import { useEffect, useState } from 'react'
import React from 'react'

function Router({children}) { // 이게 props가 객체라 destructuring을 하려고 {}를 쓴거였구나...!?!s
  const [path, setPath] = useState(window.location.pathname);
  const [component, setComponet] = useState(null);

  window.onpopstate = () => {
    setPath(window.location.pathname);
  }

  useEffect(() => {
    const child = React.Children.toArray(children).find(child => child.props.path === path);
    setComponet(child.props.component);
  }, [path]);

  return (
    <div className="App">
      {component}
      {/* {children.filter(child => child.props.path === path)} */}
    </div>
  )
}

export default Router;
