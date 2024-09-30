import { useState } from "react";

import SimpleMDEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const BodyEditor = () => {
    const [ value, setvalue ] = useState("");

    const onChange = (value) => {
        setvalue(value);
    };



    return (
        <>
            <SimpleMDEditor
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default BodyEditor;
