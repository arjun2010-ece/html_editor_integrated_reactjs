import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";


function App() {
  const [code, setCode] = useState("<h1>Hello, World!</h1>");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <>
      <div className="container">
        <div className="editorSection">
          <AceEditor
            mode="html"
            theme="monokai"
            onChange={setCode}
            value={code}
            name="editor"
            fontSize="32px"
            height="300px"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }}
          />
        </div>

        <div>
          <iframe
            title="output"
            sandbox="allow-scripts"
            srcDoc={output}
          ></iframe>
        </div>
      </div>
      <button onClick={runCode}>Run this code</button>
    </>
  );
}

export default App;
