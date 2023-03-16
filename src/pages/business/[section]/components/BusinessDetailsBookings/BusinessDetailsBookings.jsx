import React, { useState } from "react";
import { Carousel, Card, Col, Modal } from "antd";
import BusinessDetailsCarousel from "./styled-components/BusinessDetailsCarousel";
import BusinessDetailsCardContainer from "./styled-components/BusinessDetailsCardContainer";

const data = [
  { dataId: 1, dataTitle: "Titulo", dataContent: "Contenido", state: true },
  { dataId: 2, dataTitle: "Titulo 1", dataContent: "Contenido", state: false },
  { dataId: 3, dataTitle: "Titulo 2", dataContent: "Contenido", state: true },
  { dataId: 4, dataTitle: "Titulo 3", dataContent: "Contenido", state: false },
  { dataId: 5, dataTitle: "Titulo 4", dataContent: "Contenido", state: true },
];

const BusinessDetailsBookings = ({}) => {
  const [showBookModal, setShowBookModal] = useState(false);

  return (
    <>
      <BusinessDetailsCarousel>
        {data.map((it) => (
          <Col span={8} key={it.dataId}>
            <BusinessDetailsCardContainer>
              <Card
                title={it.dataTitle}
                bordered={false}
                hoverable={it.state}
                onClick={() => setShowBookModal(true)}
              >
                {it.dataContent}
              </Card>
            </BusinessDetailsCardContainer>
          </Col>
        ))}
      </BusinessDetailsCarousel>

      {showBookModal && (
        <Modal
          title="Confirmacion"
          okText="Reservar"
          cancelText="Cancelar"
          open={showBookModal}
          onOk={() => setShowBookModal(false)}
          onCancel={() => setShowBookModal(false)}
        >
          <p>Deseas reservar este turno?</p>
        </Modal>
      )}
    </>
  );
};

export default BusinessDetailsBookings;
