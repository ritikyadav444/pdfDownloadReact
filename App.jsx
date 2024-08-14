import './App.css';

const PDF_FILE_URL= "http://localhost:3000/file_pdf.pdf"

function App() {

  const downloadFile = (url)=>{
    // fetch()
  const fileName = url.split("/").pop();
const aTag = document.createElement("a");
aTag.href = url;
aTag.setAttribute("download", fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
  }


  return (
    <div className="App">
<button onClick={()=>{downloadFile(PDF_FILE_URL)}}>Download</button>
    </div>
  );
}

export default App;
