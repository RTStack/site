export const specifications = {
  pc: {
    specifications: {
      cpu: "i5",
      gpu: "Intel",
      ram: "8GB",
      disk: "SSD",
      storage: "512GB",
      screen: "24-inch",
      other: ["keyboard", "mouse"],
    },
    options: {
      cpu: [
        { key: "i3", value: "Intel Core i3" },
        { key: "i5", value: "Intel Core i5" },
        { key: "i7", value: "Intel Core i7" },
      ],
      gpu: [
        { key: "intel", value: "Integrated" },
        { key: "nvidia", value: "NVidia" },
        { key: "amd", value: "AMD" },
      ],
      ram: [
        { key: "4GB", value: "4GB" },
        { key: "8GB", value: "8GB" },
        { key: "16GB", value: "16GB" },
      ],
      disk: [
        { key: "SSD", value: "SSD" },
        { key: "HDD", value: "HDD" },
      ],
      storage: [
        { key: "128gb", value: "128GB" },
        { key: "256gb", value: "256GB" },
        { key: "512gb", value: "512GB" },
        { key: "1tb", value: "1TB" },
      ],
      screen: [
        { key: "19-inch", value: "19inch" },
        { key: "24-inch", value: "24inch" },
        { key: "27-inch", value: "27inch" },
        { key: "30-inch", value: "30inch" },
      ],
      other: [
        { key: "keyboard", value: "Keyboard" },
        { key: "mouse", value: "Mouse" },
        { key: "monitor", value: "Monitor" },
        { key: "printer", value: "Printer" },
      ],
    },
  },

  imac: {
    specifications: {
      brand: "Apple",
      model: "iMac 24-inch",
      cpu: "i5",
      gpu: "NVidia",
      ram: "8GB",
      disk: "SSD",
      storage: "512GB",
      screen: "24-inch",
      camera: "1080p",
      other: ["keyboard", "mouse"],
    },
    options: {
      ram: [
        { key: "8GB", value: "8GB" },
        { key: "16GB", value: "16GB" },
      ],
      storage: [
        { key: "512gb", value: "512GB" },
        { key: "1tb", value: "1TB" },
      ],
      other: [{ key: "printer", value: "Printer" }],
    },
  },
};
