import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const initialCharacters = [
  { id: "gray", name: "Gray Goodspeed" },
  { id: "cat", name: "Cat Good" },
  { id: "KVW", name: "KVWx" },
  { id: "MONOCAKE", name: "MONOCAKEd" },
];

const App = () => {
  const [characters, setCharacters] = useState(initialCharacters);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharacters(items);
  };

  return (
    <div>
      <header>
        <h1>Final Characters</h1>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ padding: "0", margin: "0" }} // Adjust padding and margin
              >
                {characters.map((ele, index) => (
                  <Draggable key={ele.id} draggableId={ele.id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                          padding: "16px",
                          marginBottom: "8px",
                          backgroundColor: "#f4f4f4",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          cursor: "pointer",
                          ...provided.draggableProps.style, // Ensure draggable style
                        }}
                      >
                        <h2>{ele.name}</h2>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default App;
