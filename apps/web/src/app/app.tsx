// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-success">File Storage</h1>

        <h2 className="mt-4">Upload File</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
          <div className="mb-3">
            <input type="file" name="file" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
