import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", width: '100vw', height: '100vh', fontFamily: 'Acumin Pro, sans-serif', color: '#222', flexWrap: 'wrap' }}>
      <div
        style={{ display: "flex", flex: '5 0 auto', backgroundColor: "#F3F3F3", flexDirection: 'column' }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <p style={{ marginRight: '12px', fontSize: 22, marginLeft: '4%', color: '#317FFB', fontWeight: 'bold' }}>→</p>
          <p style={{ flex: 4, fontSize: 22, color: '#317FFB', fontWeight: 'bold' }}>Resume</p>
          <div style={{ display: "flex", flex: 1, backgroundColor: '#F6F9FE', borderRadius: '50px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: '4%', paddingRight: '8px', paddingLeft: '8px', paddingTop: '8px', paddingBottom: '8px' }}>
            <div style={{ width: '20px', textAlign: 'center', backgroundColor: '#317FFB', borderRadius: '100%', color: '#fff' }}>{"<"}</div>
            6 of 8
            <div style={{ width: '20px', textAlign: 'center', backgroundColor: '#317FFB', borderRadius: '100%', color: '#fff' }}>{">"}</div>
          </div>
        </div>
        <div style={{ flex: 10, alignSelf: 'center' }}>
          <img src="./assets/dummy_pdf.png" alt="pdf" style={{ width: 'auto', height: '80vh', margin: '12px' }}></img>
        </div>
      </div>
      <div
        style={{ display: "flex", flex: '4 0 auto', backgroundColor: "#fff", flexDirection: 'column', borderLeftStyle: 'solid', borderLeftColor: '#4AADEC', borderLeftWidth: '3px', height: '100vh' }}
      >
        <div style={{ display: 'flex', flex: 15, flexDirection: 'column', height: '100%', overflowY: 'scroll' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p style={{ fontSize: 22, marginLeft: '4%', marginRight: '5px' }}>X</p>
            <p style={{ flex: 4, fontSize: 14, }}>Press here to close this drawer</p>
            <div style={{ display: "flex", flex: 2, backgroundColor: '#F6F9FE', borderRadius: '50px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: '4%', paddingRight: '8px', paddingLeft: '8px', paddingTop: '8px', paddingBottom: '8px' }}>
              <div style={{ width: '20px', textAlign: 'center', backgroundColor: '#317FFB', borderRadius: '100%', color: '#fff' }}>{"<"}</div>
            6 of 86
            <div style={{ width: '20px', textAlign: 'center', backgroundColor: '#317FFB', borderRadius: '100%', color: '#fff' }}>{">"}</div>
            </div>
          </div>
          <div style={{ flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f3f3', marginLeft: '2%', marginRight: '2%', marginBottom: '2%', borderRadius: '8px', marginTop: '4vw' }}>
            <div style={{ width: '25%', height: '10vw', position: 'relative', top: '-5vw' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f3f3', borderRadius: '100%', padding: '8px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#FFC790', borderRadius: '100%' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '-4vw', display: 'flex', flexDirection: 'column', width: '80%', fontSize: 14 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: 0 }}>Ekaansh Arora</p>
                <p style={{ color: '#777', fontSize: '12px', marginTop: '4px' }}>+91 8860092471</p>
              </div>
              <div style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
                <div style={{ display: "flex", flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>Job Title</p>
                    <p style={{ marginTop: '2px' }}>Frontend</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>Location</p>
                    <p style={{ marginTop: '2px' }}>Delhi, India</p>
                  </div>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>Salary</p>
                    <p style={{ marginTop: '2px' }}>XYZ</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>Experience</p>
                    <p style={{ marginTop: '2px' }}>2 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', marginLeft: '2%', marginRight: '2%', marginBottom: '2%', borderRadius: '8px' }}>
            <div style={{ display: 'flex', textAlign: 'center', fontSize: 12, flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '40px', alignItems: 'center', marginLeft: '10px' }}>
                <img src="./assets/briefcase.png" alt="bc" style={{ display: 'flex', height: '40px' }}></img>
                <p style={{ fontSize: '16px', display: 'flex', verticalAlign: 'center', fontWeight: 'bold' }}>Work Experience</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ fontSize: '14px', margin: 0 }}>• Frontend</p>
                <p style={{ color: '#777', marginLeft: '10px', marginTop: '2px' }}>2 years & 4 months</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ fontSize: '14px', margin: 0 }}>• Backend</p>
                <p style={{ color: '#777', marginLeft: '10px', marginTop: '2px' }}>1 years & 4 months</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', marginLeft: '2%', marginRight: '2%', marginBottom: '2%', borderRadius: '8px' }}>
            <div style={{ display: 'flex', textAlign: 'center', fontSize: 12, flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '40px', alignItems: 'center', marginLeft: '10px' }}>
                <img src="./assets/cap.png" alt="bc" style={{ display: 'flex', height: '40px' }}></img>
                <p style={{ fontSize: '16px', display: 'flex', verticalAlign: 'center', fontWeight: 'bold' }}>Work Experience</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ color: '#777', margin: 0 }}>• Frontend</p>
                <p style={{ fontSize: '14px', marginLeft: '10px', marginTop: '2px' }}>2 years & 4 months</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ color: '#777', margin: 0 }}>• Frontend</p>
                <p style={{ fontSize: '14px', marginLeft: '10px', marginTop: '2px' }}>2 years & 4 months</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', marginLeft: '2%', marginRight: '2%', marginBottom: '2%', borderRadius: '8px' }}>
            <div style={{ display: 'flex', textAlign: 'center', fontSize: 12, flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '40px', alignItems: 'center', marginLeft: '10px' }}>
                <img src="./assets/documents.png" alt="bc" style={{ display: 'flex', height: '40px' }}></img>
                <p style={{ fontSize: '16px', display: 'flex', verticalAlign: 'center', fontWeight: 'bold' }}>Work Experience</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ color: '#777', margin: 0 }}>• Frontend</p>
                <p style={{ fontSize: '14px', marginLeft: '10px', marginTop: '2px' }}>2 years & 4 months</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>
                <p style={{ color: '#777', marginBottom: '10px', marginTop: '2px' }}>• Frontend</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', margin: '2%' }}>
          <div style={{ display: 'flex', backgroundColor: '#317FFB', borderRadius: '30px', flex: 1, alignItems: 'center', justifyContent: 'center', color: '#fff', marginRight: '2%' }}>Shortlist</div>
          <div style={{ display: 'flex', borderColor: '#317FFB', borderStyle: 'solid', borderWidth: '2px', borderRadius: '30px', flex: 1, alignItems: 'center', justifyContent: 'center', color: '#317FFB', marginLeft: '2%' }}>Reject</div>
        </div>
      </div>
    </div>
  );
}

export default App;
