import { useEffect, useState } from "react";
import TableRow from "./TableRow";
const UserData = ({ users }) => {


    return (
        <div>
            {
                users.map((curUser) => {
                    return (
                        <TableRow curUser={curUser} />
                    )
                })
            }

        </div>
    )
}

export default UserData;