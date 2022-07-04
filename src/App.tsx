import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { BookInfoComponent } from './component/bookFullInfo/bookInfoComponent';
import { BookComponent } from './component/books/bookComponent';
import { FindBar } from './component/findBar/findBar';


const App = observer(() => {

  return (
    <div className="App">
      <FindBar/>
      <RouterBody/>
    </div>
  );
})


const RouterBody = React.memo(() => {

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/books"/>} />
      <Route path={'/books'} element={<BookComponent/>}>
          <Route path={'/books/category'} element={<BookComponent/>}>
              <Route path = {':category'} element = {<BookComponent/>}>
                  <Route path = {':pageNum'}  element={<BookComponent/>}/>
              </Route>
          </Route>
          <Route path = {':pageNum'} element = {<BookComponent/>}/>
      </Route>
      <Route path={'/book-info'} element={<BookInfoComponent/>}>
          <Route path = {':id'}  element={<BookInfoComponent/>}/>
      </Route>
    </Routes>
  )
})
export default App;
