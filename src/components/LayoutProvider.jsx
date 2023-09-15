"use client"

import { ConfigProvider } from "antd";

const LayoutProvider = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#000",
              borderRadius: 2,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
};

export default LayoutProvider;