/* eslint-disable react/prop-types */
import SimpleMDEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const BodyEditor = ({ value, onChange }) => {
    return (
        <>
            <SimpleMDEditor
                value={value}
                onChange={onChange} // Pass down the parent's onChange handler
            />
        </>
    );
};

export default BodyEditor;
