import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux';

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/components/navigation/navigation.less';


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>

    <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
