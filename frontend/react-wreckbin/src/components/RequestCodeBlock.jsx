import { CodeBlock, dracula } from "react-code-blocks";

function RequestCodeBlock({ code, language }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      theme={dracula}
    />
  );
}

export default RequestCodeBlock;