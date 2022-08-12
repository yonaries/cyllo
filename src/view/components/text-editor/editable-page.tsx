import React from "react";
import "../../css/editable-page.css";
import addIcon from '../../../assets/icons/Plus.svg'

import TipTap from "./tiptab-block";
import { bid } from "./block-id";
import ParagraphBlock from "./paragraph-block";
import CodeCellBlock from "./code-block";
import TipEditor from "./command/TipEditor";

type Props = {
  blocks?: any;
};

interface blockType {
  id: string;
  html: string;
  tag: string;
}

const initialBlock = { id: bid(), html: "", tag: "p" };

const EditablePage = ({ blocks }: Props) => {
  blocks = [initialBlock];
  console.log();

  function addBlock(blockKind: string) {
    if (blockKind === "p")
      return <ParagraphBlock />
    if (blockKind === "code")
      return <CodeCellBlock />
  }

  return (
    <div className="Page">
      {/* <TipEditor /> */}
      <TipTap />
    </div>
  );
};

export default EditablePage;
