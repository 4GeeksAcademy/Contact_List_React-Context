import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { RouterProvider } from "react-router-dom";  
import  router  from "./routes";  
import { StoreProvider } from './hooks/useGlobalReducer';  




const Main = () => {
    return (
        
        <React.StrictMode>  
            {/* Provide global state to all components */}
            <StoreProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
