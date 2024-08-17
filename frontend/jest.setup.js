// import '@testing-library/jest-dom'

require("@testing-library/jest-dom");

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />; // Image bileşenini basit bir img etiketiyle mock'lama
  },
}));
