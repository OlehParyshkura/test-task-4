import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import Alert from 'react-bootstrap/Alert';
import{useHistory} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function UserStatistics() {
const history = useHistory();
  const [_triggerFetch, _setTrigerFetch] = useState(true);
  function triggerFetch() {
    _setTrigerFetch((val) => !val);
  }
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({ limit: 50, page: 1 });
  const [message, setMessage] = useState({ text: 'default', type: 'primary', visibility: false, })
  function showMessage(type, text) {
    clearTimeout(message.timeout);
    let timeout = setTimeout(() => setMessage({ visibility: false }), 2000);
    setMessage({ text, type, visibility: true, timeout });

  }
  useEffect(() => {
    getUsers()
  }, [_triggerFetch]);

  function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }
  function getUsers() {
    fetch('http://localhost:8080/api/users?' + objectToQueryString(params))
      .then(res => res.json())
      .then(res => { setUsers(res.users);console.log(res.users); setCount(res.count) })
      .catch((err) => { showMessage('danger', `something went wrong\n${err}`); })
  }
  function getPaginationItems() {
    const items = [];
    for (let n = 1, i = 0; i < count; i += params.limit, n++) {
      items.push(<Pagination.Item className="bgc" key={n} active={n === params.page} onClick={() => { setParams({ ...params, page: n }); triggerFetch(); }}>
        {n}
      </Pagination.Item>)
    }
    return items;

  }
  return (
      <Container>
      <Table striped bordered hover>
        <thead className="bgc"> 
          <tr >
            <th name="id" >id</th>
            <th name="first_name">first_name</th>
            <th name="last_name">last_name</th>
            <th name="email">email</th>
            <th name="ip_address">ip_address</th>
            <th name="total_clicks">total_clicks</th>
            <th name="total_page_views">total_page_views</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return (
              <tr key={key} onClick={() => { history.push(`/user/${user.id}`);}}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.ip_address}</td>
                <td>{user.total_clicks}</td>
                <td>{user.total_page_views}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
      <Pagination  className="text-center">
        {getPaginationItems()}
      </Pagination>
     
      
      <Alert className="fixed-top" show={message.visibility} variant={message.type}>
        <pre>
          {message.text}
        </pre>
      </Alert>
      </Container>
    
  );
}

export default UserStatistics;