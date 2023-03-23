import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <Button label="Click me!" onClick={() => alert("Button clicked")} />
      <Input placeholder="Enter something" />
      <Card
        title="My Card"
        description="This is my card component with some text in it."
      />
    </div>
  );
};

export default App;
