import React, { useState, useContext } from "react";
import { data } from "/home/shruti/advanced/src/data";

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context Api / Use Context</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  const mainData = useContext(PersonContext);
  console.log(mainData);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="button" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default ContextApi;
