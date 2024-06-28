import { useState } from "react";
const TableRow = ({ curUser }) => {

    const { id, email, first_name, last_name, avatar } = curUser;
    const [isExpanded, setIsExpanded] = useState(false);
    //console.log(users);
    const onRowClick = () => { setIsExpanded(!isExpanded) }

    return (

        <div style={{ height: "auto" }} onClick={() => { onRowClick() }} key={id}>
            <tr>
                <td style={{ fontWeight: "bold" }}>{id}</td>
                <td style={{ fontWeight: "bold" }}>{first_name}</td>

            </tr>
            {
                isExpanded ?
                    <div style={{ height: "auto", display: "flex", flexDirection: "row" }}>
                        <img style={{ marginRight: "10px" }} src={avatar} height={"200px"} width={"200px"} alt="" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <p style={{ fontWeight: "bold" }}>Id</p>
                                <p>{" : " + id}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <p style={{ fontWeight: "bold" }}>First Name</p>
                                <p>{" : " + first_name}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <p style={{ fontWeight: "bold" }}>Last Name</p>
                                <p>{" : " + last_name}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <p style={{ fontWeight: "bold" }}>email</p>
                                <p>{" : " + email}</p>
                            </div>
                        </div>
                    </div> : <div></div>
            }
        </div>

    )
}

export default TableRow;