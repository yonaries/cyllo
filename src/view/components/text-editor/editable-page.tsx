import "../../css/editable-page.css";

import { bid } from "./block-id";
import TipTap from "./tiptab-block";

type Props = {
  blocks?: any;
};

const EditablePage = ({ blocks }: Props) => {

  return (
    <div className="Page" id="page">
      <TipTap />
    </div>
  );
};

export default EditablePage;