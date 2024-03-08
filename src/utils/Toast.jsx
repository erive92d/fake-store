import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ message }) => {
    return (
        <div>
            {message}
        </div>
    );
};

export default Toast;

// Usage:
// Add this line wherever you want to show the toast notification
// toast.success(<Toast message="Item added to cart" />, {
//   position: toast.POSITION.TOP_CENTER,
//   autoClose: 2000 // Close the toast after 2 seconds
// });
