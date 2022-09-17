import React, {useState, useEffect} from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import RouterPage from "./router/RouterPage"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <ContainerApp >
      <GlobalStyle />
      <RouterPage />
    </ContainerApp>
  );
}

export default App;
