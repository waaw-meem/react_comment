import React from "react";
import UserComment from "./UserComment";
import ApprovalCard from "./ApprovalCard";
import "./ApprovalCSS.css"

// const ButtonText = () => {
//     return 'Click on Me'
// }

//Functional Component
const App = () => {
    
    const secondButtonText = "Submit"

    return(
        <div className="ui container">
           <ApprovalCard>
            <UserComment userName="Wali" date="2 days ago" fav="5 Favs" comment="It was nice"/>
            </ApprovalCard>
            <ApprovalCard>
            <UserComment userName="Wali" date="2 days ago" fav="5 Favs" comment="It was nice"/>
            </ApprovalCard>
            <ApprovalCard>
            <UserComment userName="Wali" date="2 days ago" fav="5 Favs" comment="It was nice"/>
            </ApprovalCard>
            <ApprovalCard>
            <UserComment userName="Wali" date="2 days ago" fav="5 Favs" comment="It was nice"/>
            </ApprovalCard>
        </div>
        // <div className="ui container">
        //    <button> {secondButtonText}</button>
        //    <button> {ButtonText()}</button>
        // </div>
    )

}

export default App