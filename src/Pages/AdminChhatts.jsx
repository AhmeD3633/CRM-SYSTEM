import React, { useState } from 'react';
import Chat from '../Pages/Chat';
import { filterAndSortData } from '../Components/AdminChatssCom/FilterAndSort'; 
import SearchAndSort from '../Components/AdminChatssCom/SearchAndSelect';

function AdminChhatts() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [sortOrder, setSortOrder] = useState(""); 

  const Data = [
    { id: "#156", customer: "John Doe", email: "john@example.com" },
    { id: "#247", customer: "Jane Doe", email: "jane@sample.com" },
    { id: "#098", customer: "Ahmed", email: "jane2@sample.com" },
    { id: "#768", customer: "Mohamed", email: "jane3@sample.com" },
    { id: "#453", customer: "Jane Doe", email: "jane4@sample.com" },
    { id: "#158", customer: "Jane", email: "jane5@sample.com" },
    { id: "#009", customer: "Jane", email: "jane6@sample.com" }
  ];


  const sortedData = filterAndSortData(Data, searchTerm, sortOrder);

  const tableStyle = { width: '100%', borderCollapse: 'collapse' };

  return (
    <div className="AdminChats bg-[#292929] text-[white] h-screen px-[30px] py-[40px]">
      <h3>المحادثات</h3>

      <SearchAndSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <div className="table bg-black rounded-xl mt-5 px-[20px] py-[5px]">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>id</th>
              <th>مسئول</th>
              <th> البريد الالكتروني</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {
              sortedData.length > 0 ? (
              sortedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customer}</td>
                  <td>{item.email}</td>
                  <td><Chat /></td>
                </tr>
              )
              )) : <tr>
                <td style={{ textAlign: 'center' }}>No Data</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminChhatts;