import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';

const ModelUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<Array<{
    class: string;
    confidence: number;
    bbox: [number, number, number, number];
  }> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetection = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      // Mock detection results for prototype
      // In production, this would make an API call to your model endpoint
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time
      
      setDetectionResults([
        {
          class: 'Toolbox',
          confidence: 0.98,
          bbox: [100, 100, 200, 200]
        },
        {
          class: 'Oxygen Tank',
          confidence: 0.95,
          bbox: [300, 300, 400, 400]
        }
      ]);
    } catch (err) {
      setError('Error processing image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Model Testing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Upload and Test
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Test our model with your own images to see how it performs in detecting space station objects.
          </p>
        </div>

        <div className="mt-10">
          <div className="max-w-xl mx-auto">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileSelect}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

            {error && (
              <div className="mt-4 flex items-center text-sm text-red-600">
                <AlertCircle className="h-5 w-5 mr-2" />
                {error}
              </div>
            )}

            {preview && (
              <div className="mt-8">
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full rounded-lg shadow-lg"
                  />
                  {detectionResults && (
                    <div className="absolute inset-0">
                      {detectionResults.map((result, index) => (
                        <div
                          key={index}
                          className="absolute border-2 border-blue-500"
                          style={{
                            left: `${result.bbox[0]}px`,
                            top: `${result.bbox[1]}px`,
                            width: `${result.bbox[2] - result.bbox[0]}px`,
                            height: `${result.bbox[3] - result.bbox[1]}px`
                          }}
                        >
                          <div className="absolute -top-6 left-0 bg-blue-500 text-white px-2 py-1 text-xs rounded">
                            {result.class} ({(result.confidence * 100).toFixed(1)}%)
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleDetection}
                  disabled={isLoading}
                  className={`mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {isLoading ? 'Processing...' : 'Detect Objects'}
                </button>

                {detectionResults && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Detection Results</h3>
                    <div className="mt-2 space-y-2">
                      {detectionResults.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
                        >
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="font-medium">{result.class}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            Confidence: {(result.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelUpload;