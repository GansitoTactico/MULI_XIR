import Webcam from "react-webcam";
("use client");
function WebCam() {
  return (
    <div>
      <h1>pagina bien fregona</h1>
      <Webcam
        height={480}
        width={640}
        screenshotFormat="image/jpeg"
        imageSmoothing={true}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
            }}
          >
            Take Screenshot
          </button>
        )}
      </Webcam>
    </div>
  );
}

export default WebCam;
