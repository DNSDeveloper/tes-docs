import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

export const Docs = () => {
    const generateDocs = async () => {

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "Foo Bar",
                                bold: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
                            }),
                        ],
                    }),
                ],
            },
        ],
    });
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}
    
    // Used to export the file into a .docx file
   

    return (
        <>
        <div>
            <button onClick={generateDocs}>Generate Letter</button>
        </div>
        </>
    )
    
    // Done! A file called 'My Document.docx' will be in your file system.
}