import useThemeStore from "@/store/theme";
import { Button, Input, Space } from "antd";

export default function Home() {
  const changeTheme = useThemeStore((state) => state.changeTheme);
  return (
    <div>
      <h1>Home</h1>
      <Space>
        <Input placeholder="Please Input" />
        <Button type="primary" onClick={() => changeTheme(true)}>
          修改主题
        </Button>
      </Space>
    </div>
  );
}
