import React from 'react';
import *  as xlsx from 'xlsx'

const ExcelToArray = () => {
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                handleWriteFile(JSON.stringify(json), sheetName)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    const handleWriteFile = (content, sheetName) => {
        const filename = `${sheetName}.txt`; // Name of the file to be created

        const blob = new Blob([content], { type: 'text/plain' });

        // Create a temporary anchor element
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;

        // Perform the click to trigger the download
        a.click();

        // Clean up resources
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <form>
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form>
        </div>
    )
}

export default ExcelToArray
