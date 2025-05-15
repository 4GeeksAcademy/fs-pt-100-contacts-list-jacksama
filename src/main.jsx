import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';  // Global styles for your application
import { ContactProvider } from './context/contactContext.jsx';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";


// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        <ContactProvider>
            <RouterProvider router={router} />
        </ContactProvider>            
    </React.StrictMode>
);

// <StoreProvider> 
{/* Set up routing for the application */} 
 //<RouterProvider router={router}>
 //</RouterProvider>
 //</StoreProvider>


//  // Import RouterProvider to use the router
//  // Import the router configuration
//import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management
