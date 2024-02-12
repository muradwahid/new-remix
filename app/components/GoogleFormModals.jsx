import { Button, Frame, Modal, TextContainer } from "@shopify/polaris";
import { useState, useCallback, useRef } from "react";

export default function GoogleFormModals() {
  const [active, setActive] = useState(true);

  const buttonRef = useRef(null);

  const handleOpen = useCallback(() => setActive(true), []);

  const handleClose = useCallback(() => {
    setActive(false);
  }, []);

  const activator = (
    <div ref={buttonRef}>
      <Button onClick={handleOpen}>Open</Button>
    </div>
  );

  return (
    <div style={{ height: "100vh" }}>
      <Frame>
        {activator}
        <Modal
          activator={buttonRef}
          open={active}
          onClose={handleClose}
          title="Please Submit this Form"
          // primaryAction={{
          //   content: "Add Instagram",
          //   onAction: handleClose,
          // }}
          // secondaryActions={[
          //   {
          //     content: "Learn more",
          //     onAction: handleClose,
          //   },
          // ]}
        >
          <Modal.Section>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeU4OlEQnRbjtWuBMi_5wYGs3QodBasBLzsNd9AIZTzzWY51A/viewform?embedded=true"
              width="100%"
              height="1000px"
              frameBorder="0"
              marginHeight="{0}"
              marginWidth="{0}"
            >
              Loading…
            </iframe>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
  );
}
