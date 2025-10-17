function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="name">PULIMI SRI SAI LOKESH KUMAR REDDY</h1>
          <h2 className="info">2300033017 • CSE • HTE</h2>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background: linear-gradient(135deg, #667eea, #764ba2);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          background-color: white;
          padding: 40px 60px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
        }

        .name {
          font-size: 2.2rem;
          color: #333;
          margin-bottom: 15px;
        }

        .info {
          font-size: 1.2rem;
          color: #666;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  )
}

export default App
