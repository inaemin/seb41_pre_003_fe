import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .dot-spin {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 #9880ff, 12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 0 #9880ff, 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
      0 18px 0 0 rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
      -18px 0 0 0 rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
    animation: dot-spin 1.5s infinite linear;
  }

  @keyframes dot-spin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.727926px -12.727926px 0 0 #9880ff,
        18px 0 0 0 #9880ff,
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 0 #9880ff, 18px 0 0 0 #9880ff,
        12.727926px 12.727926px 0 0 #9880ff,
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 0 #9880ff, 12.727926px 12.727926px 0 0 #9880ff,
        0 18px 0 0 #9880ff,
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 0 #9880ff, 0 18px 0 0 #9880ff,
        -12.727926px 12.727926px 0 0 #9880ff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 0 #9880ff, -12.727926px 12.727926px 0 0 #9880ff,
        -18px 0 0 0 #9880ff,
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 0 #9880ff, -18px 0 0 0 #9880ff,
        -12.727926px -12.727926px 0 0 #9880ff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #9880ff,
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #9880ff, -12.727926px -12.727926px 0 0 #9880ff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.727926px -12.727926px 0 0 #9880ff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 0 #9880ff;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="dot-spin" />
    </LoadingContainer>
  );
};

export default Loading;
