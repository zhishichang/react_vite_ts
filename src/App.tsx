import { RouterProvider } from "react-router-dom";
import router from "./router";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import AntdGloble from "./components/AntdGloble";
import useThemeStore from "./store/theme";

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ed6c00",
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntdApp>
        <AntdGloble />;
        <RouterProvider router={router} />;
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
