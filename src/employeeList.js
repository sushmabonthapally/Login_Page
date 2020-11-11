import React, { Component } from 'react';

class Details extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            user:[{
                "id":1,
                "name":"test1",
                "age" : "11",
                "gender":"male",
                "email" : "test1@gmail.com",
                "phoneNo" : "9415346313"
                },
                {
                "id" : 2,
                "name":"test2",
                "age" : "12",
                "gender":"male",
                "email" : "test2@gmail.com",
                "phoneNo" : "9415346314"
                },
                {
                "id":3,
                "name":"test3",
                "age" : "13",
                "gender":"male",
                "email" : "test3@gmail.com",
                "phoneNo" : "9415346315"
                },
                {
                "id":4,
                "name":"test4",
                "age" : "14",
                "gender":"male",
                "email" : "test4@gmail.com",
                "phoneNo" : "9415346316"
                },
                {
                "id":5,
                "name":"test5",
                "age" : "15",
                "gender":"male",
                "email" : "test5@gmail.com",
                "phoneNo" : "9415346317"
                },
                {
                "id":6,
                "name":"test6",
                "age" : "16",
                "gender":"male",
                "email" : "test6@gmail.com",
                "phoneNo" : "9415346318"
                }]
               }
             }
      render(){
          return(
           <div>
               <h4>EmployeeList page</h4>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">age</th>
                    <th scope="col">gender</th>
                    <th scope="col">email</th>
                    <th scope="col">phoneNo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.user.map(val=>{
                        return <tr key = {val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.phoneNo}</td>
                               </tr>
                        })
                    }
                 </tbody>
               </table>
              </div>
              )
            }
        }

export default Details