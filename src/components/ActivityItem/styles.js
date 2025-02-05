import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CallDirection = styled.div`
  width: 12px;
  height: 12px;
  background: ${props => props.direction === 'outbound' ? 'gray' : 'lightgreen'};
  border-radius: 6px;
`

export const CallDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  b {
    margin-bottom: 3px;
  }
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;

  span:not(:last-child) {
    display: inline-block;
    margin-bottom: 4px;
  }
`

export const Activity = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, .04);
  text-decoration: none;
  color: #000;

  ${CallDirection} {
    margin-right: 12px;
  }
`
