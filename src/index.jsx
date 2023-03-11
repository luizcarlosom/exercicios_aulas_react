import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Timer from './components/Exemplo1';
import routes from './routes';
import './index.css';


const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

/*class OlaMundo extends React.Component {
  render() {
    return (
      <h1>
        Olá
        {this.props.name}
        !
      </h1>
    );
  }
}

class Pagina01 extends React.Component {
  render() {
    return (
      <div>
        <OlaMundo name={this.props.name[0]} />
        <OlaMundo name={this.props.name[1]} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Timer start={0} ms={500} />
  </div>,
);*/