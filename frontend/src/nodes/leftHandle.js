
export const LeftHandle = ({ id, variable, index }) => (
  <div
    style={{
      position: 'absolute',
      left: -75,
      top:0 + index*30,
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
    }}
  >
    <div
      style={{
        background: '#e0f2fe',
        color: '#0369a1',
        padding: '2px 8px',
        borderRadius: '5px',
        fontWeight: 500,
        fontSize: '11px',
        border: '1px solid #bae6fd',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      }}
    >
      {variable}
    </div>
  </div>
);
