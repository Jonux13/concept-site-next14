import { MantineProvider } from "@mantine/core";
import { GetInTouchSimple } from "../components/GetInTouchSimple";

const contacto = () => {
  return (
    <>
      <MantineProvider>
        <GetInTouchSimple />
      </MantineProvider>
    </>
  );
};

export default contacto;
