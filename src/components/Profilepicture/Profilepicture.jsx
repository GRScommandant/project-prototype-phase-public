import { useState } from 'react'
import axios from 'axios';


const styles = {
  profilePictureUpload: {
    padding: '20px',
  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  imagePreview: {
    border: 'none',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  previewImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  uploadControls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
  fileInput: {
    display: 'none',
  },
  uploadLabel: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    border:'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  errorMessage: {
    color: '#dc3545',
    marginTop: '10px',
    textAlign: 'center',
  },
};

//Ruleset ignored due to bad selector.
export default function Profilepicture() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState( false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setError(null);

    if (file && !file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file && file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setSelectedImage(file);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreviewUrl(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setError('Please select an image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('profileImage', selectedImage);
      // todo: url ro edit kon
      const response = await axios.post('/api/upload-profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status !== 200)
        throw new Error('Upload failed');

      console.log('Upload successful:', response.data);
    } catch (err) {
      setError('Failed to upload image: ' + err.message);
    }
  };

  const buttonStyle = {
    ...styles.uploadButton,
    ...(selectedImage ?
      (isHovered ? styles.uploadButtonHover : {}) :
      styles.uploadButtonDisabled
    ),
  };

  return (
    <div style={styles.profilePictureUpload}>
      <form onSubmit={handleSubmit}>
        <div style={styles.uploadContainer}>
          {previewUrl && (
            <div style={styles.imagePreview}>
              <img
                src={previewUrl}
                alt="Preview"
                style={styles.previewImage}
              />
            </div>
          )}

          <div style={styles.uploadControls}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.fileInput}
              id="profile-image-input"
            />
            <label
              htmlFor="profile-image-input"
              style={styles.uploadLabel}
            >
              +انتخاب عکس
            </label>

            <button
              type="submit"
              style={buttonStyle}
              disabled={!selectedImage}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              ثبت عکس
            </button>
          </div>
        </div>

        {error && (
          <div style={styles.errorMessage}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
