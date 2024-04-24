<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = () => {
  return <h4>page hero</h4>
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

=======
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = () => {
  return <h4>page hero</h4>
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

>>>>>>> 2db3691459c20528a15b6fc5bc272a1aaa9c1438
export default PageHero