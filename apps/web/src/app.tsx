import { useRef } from 'react';

export function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <a href="Screenshot 5.png" download="Screenshot 5.png">
        Screenshot 5.png
      </a>

      <div className="container">
        <h1 className="mt-5 text-success">File Storage</h1>

        <h2 className="mt-4">Upload File</h2>
        <form
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(inputRef.current?.value);
          }}
        >
            


          <div className="mb-3">
            <input
              ref={inputRef}
              type="file"
              name="file"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary">Upload</button>
        </form>
      </div>
    </main>
  );
}

export default App;
