import { CodeBlock, dracula } from "react-code-blocks";

function RequestCodeBlock({ code, language, showLineNumbers, startingLineNumber }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
    />
  );
}

export default RequestCodeBlock;