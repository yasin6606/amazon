import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const SignIn = (): JSX.Element => {
    return <>
        <div className="flex flex-col items-center">
            <div>
                <Button variant="contained" color="warning" className="w-60">Sign in</Button>
            </div>
            <div>
                <p className="m-0 py-2 text-xs text-gray-500">New Customer? <Link to="/"
                                                                                  className="text-blue-500">start
                    here.</Link></p>
            </div>
        </div>
    </>;
};

export default SignIn;