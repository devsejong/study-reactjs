import React from "react";
import ContactInfo from "./ContactInfo"

export default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keywork : "",
            contactData : [
                {name : "test1", phone : 1234},
                {name : "test2", phone : 1233},
                {name : "test3", phone : 1232},
                {name : "test4", phone : 1231}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            keyword : e.target.value
        });
    }
    
    render(){
        const dataToContact = (data)=>{
            data.sort();
            data = data.filter((item)=>{
                return item.name.indexOf(this.state.keyword) > -1
            });
            
            return data.map((item, i)=>{
                return (<ContactInfo contact={item} key={i}/>);
            });
        }
        
        return (
            <div>
                <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
                
                {dataToContact(this.state.contactData)}
            </div>
        )
    }
}