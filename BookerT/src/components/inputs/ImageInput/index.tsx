import React, { useRef, useState } from "react";
import imagePlaceholder from "../../_common/assets";
import "./index.css";
import { Icon } from "../../";



export const useImageInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    imagePlaceholder,
  );
  const sizeLimit = 2097152;

  const selectImage = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    if (window.confirm("Estás seguro de eliminar esta imagen")) {
      setPreviewImage(imagePlaceholder);
      window.alert("Imagen Eliminada.");
    }
  };

  const updateFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target?.result!!);
    };
    reader.readAsDataURL(file);
  };

  const pickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > sizeLimit) {
        window.alert("El tamaño del archivo no debe exceder 2mb");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result!!);
      };
      reader.readAsDataURL(file);
    }
  };
  const retunable = {
    ImageInput: (
      <ImageInputContainer
        previewImage={previewImage}
        selectImage={selectImage}
        imagePlaceholder={imagePlaceholder}
        clearImage={clearImage}
        fileInputRef={fileInputRef}
        pickFile={pickFile}
      />
    ),
    selectedImage: previewImage,
    clearImage: clearImage,
    updateFile: updateFile,
  };

  return retunable;
};

interface imageInputContainerProp {
  previewImage: string | ArrayBuffer | null;
  selectImage: () => void;
  imagePlaceholder: any;
  clearImage: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  pickFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageInputContainer: React.FC<imageInputContainerProp> = ({
  previewImage,
  selectImage,
  imagePlaceholder,
  clearImage,
  fileInputRef,
  pickFile,
}) => {
  return (
    <div className="ads-imagePreviewWrapper_container">
      <div
        className="ads-imagePreviewWrapper"
        style={{ backgroundImage: `url(${previewImage})` }}
        onClick={selectImage}
      ></div>
      <label
        htmlFor="ads-image-input-component"
        className="form-label"
        id="place-label"
      >
        {previewImage !== imagePlaceholder ? (
          <Icon
            name="bell"
            //className="ads-inmage-input-component-icon"
            onClick={clearImage}
          />
        ) : (
          <Icon
           name="trash"
            //className="ads-inmage-input-component-icon"
            onClick={selectImage}
          />
        )}
      </label>
      <input
        id="ads-image-input-component"
        ref={fileInputRef}
        className="ads-imagePreview_input"
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
        onChange={pickFile}
      />
    </div>
  );
};
