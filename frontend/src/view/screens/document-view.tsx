import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import devUser from "../../assets/icons/devuser.png";
import DocViewButtons from "../components/doc-view-buttons";
import EditablePage from "../components/text-editor/editable-page";
import "../css/view-document.css";

type Props = {};

function ViewDocument({ }: Props) {
  const docStatus = useSelector((state: RootState) => state.docStatus);

  const headTitle = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [2] }),
      Placeholder.configure({
        placeholder: 'Title',
      })
    ],
    content: `<h2></h2>`
  });

  const docDescBlock = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Description',
      })
    ],
  });

  useEffect(() => {
    if (docStatus.editMode) {
      headTitle?.setEditable(true)
      docDescBlock?.setEditable(true)
    }
    if (!docStatus.editMode) {
      headTitle?.setEditable(false)
      docDescBlock?.setEditable(false)
    }
  }, [docStatus, docDescBlock, headTitle])

  return (
    <div className="document-view">
      <div className="document-description">
        <div className="header-title">
          <EditorContent editor={headTitle} />
        </div>
        <div className="profile-button-docDesc">
          <div className="profile-docDesc">
            <div className="profile">
              <img className="profile-avatar" src={devUser} />
              <p>John doe </p>
              <span>created on Jul 28 2022, 14:23</span>
            </div>
            <div className="doc-desc">
              <EditorContent editor={docDescBlock} />
            </div>
          </div>
          <DocViewButtons />
        </div>
      </div>
      <EditablePage />
    </div>
  );
}

export default ViewDocument;
