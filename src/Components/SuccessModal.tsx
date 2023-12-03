import { Modal } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const SuccessModal = ({ visible, onClose }: any) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
    >
      <div style={{ textAlign: 'center' }}>
        <CheckCircleFilled style={{ fontSize: '48px', color: '#1890ff' }} />
        <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '16px' }}>
          Submitted
        </p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
