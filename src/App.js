import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  return (
    <Container>
      <Wrapper>
        <STitle>Todoリスト</STitle>
        <SForm>
          <SInput onChange={(e) => setNewTask(e.target.value)} />
          <SButton onClick={() => setTasks([...tasks, newTask])}>決定</SButton>
        </SForm>
        <SUl>
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </SUl>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #33ccff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  border-radius: 5%;
  background-color: white;
`;

const STitle = styled.h2`
  text-align: center;
`;

const SForm = styled.div`
  text-align: center;
`;

const SInput = styled.input`
  width: 70%;
  height: 20px;
`;

const SButton = styled.button`
  background-color: #33ccff;
  color: white;
  border-radius: 15%;
  border: none;
  height: 30px;
  width: 60px;
`;

//list

const SUl = styled.ul`
  overflow: hidden;
  overflow-y: auto;
  width: 90%;
  height: 250px;
`;

export default App;
