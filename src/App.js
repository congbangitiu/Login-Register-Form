import React, { Component } from 'react';
import login from "./Login";
import Toggle from "./Toggle";
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      news: []
    }
  };

  componentDidMount() {
    axios.get('/api/news')
         .then(res => {
            const news = res.data;
            this.setState({ news });
          })
         .catch(error => console.log(error));
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  
  handleInsertSubmit = (event) => {
    event.preventDefault();
  
    const newItem = {
        id: '',
        title: this.state.username,
        description: this.state.password
    };
  
    let news = this.state.news;
    news = [newItem,...news];
    this.setState({ news: news });
  };

  render() {
    return(
      <div>
        <h2>Add an item</h2>
        <form onSubmit={this.handleInsertSubmit}>
          <table>
            <tbody>
              <tr>
                <th><label>Title</label></th>
                <td>
                  <input
                    name="title"
                    type="text"
                    onChange={this.handleInputChange} />
                </td>
              </tr>

              <tr>
                <th><label>Description</label></th>
                <td>
                  <textarea
                    name="description"
                    onChange={this.handleInputChange} />
                </td>
              </tr>

              <tr>
                <th><label>Content</label></th>
                <td>
                  <textarea
                    name="content"
                    onChange={this.handleInputChange} />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit">Submit</button>
        </form>

        <hr />

        <ul>
          {this.state.news.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <div>{item.description}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
};

export default App;
