import React from 'react'
import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>We couldn’t find the page you were looking for. Visit Zerodha’s <br />
                <Link to={"/"}>home page</Link> </p>
            </div>

        </div>
  );
}
