
import './App.css'
import NavBar from "./_components/NavBar.tsx";
import TypeContextProvider from "./_context/TypeContextProvider.tsx";
import PetsGrid from "./_components/PetsGrid.tsx";
import PageContextProvider from "./_context/PageContextProvider.tsx";
import SelectedPetContextProvider from "./_context/SelectedPetContextProvider.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PetsForm from "./_components/PetsForm.tsx";

function App() {

  return (
    <>
      <TypeContextProvider>
          <PageContextProvider>
              <SelectedPetContextProvider>
                  <NavBar/>
                  <BrowserRouter>
                      <Routes>
                          <Route path={"/"} element={<PetsGrid/>}/>
                          <Route path={"/update"} element={<PetsForm/>}/>
                      </Routes>
                  </BrowserRouter>

              </SelectedPetContextProvider>
          </PageContextProvider>
      </TypeContextProvider>
    </>
  )
}

export default App
