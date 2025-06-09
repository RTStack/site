"use client";
import React, { createContext, useContext, useState } from "react";

interface PreviewSliderType {
  isModalPreviewOpen: boolean;
  previewImageUrls: string[];
  initialIndex: number;
  openPreviewModal: (images: string[], index?: number) => void;
  closePreviewModal: () => void;
}

const PreviewSlider = createContext<PreviewSliderType | undefined>(undefined);

export const usePreviewSlider = () => {
  const context = useContext(PreviewSlider);
  if (!context) {
    throw new Error("usePreviewSlider must be used within a ModalProvider");
  }
  return context;
};

export const PreviewSliderProvider = ({ children }) => {
  const [isModalPreviewOpen, setIsModalOpen] = useState(false);
  const [previewImageUrls, setPreviewImageUrls] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const openPreviewModal = (images: string[], index: number = 0) => {
    setPreviewImageUrls(images);
    setInitialIndex(index);
    setIsModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsModalOpen(false);
    setPreviewImageUrls([]);
    setInitialIndex(0);
  };

  return (
    <PreviewSlider.Provider
      value={{
        isModalPreviewOpen,
        previewImageUrls,
        initialIndex,
        openPreviewModal,
        closePreviewModal,
      }}
    >
      {children}
    </PreviewSlider.Provider>
  );
};
