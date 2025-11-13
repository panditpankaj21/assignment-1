
export const LabelledInput = ({ label, value, onChange, isTextarea = false, inputRef }) => (
  <label className="flex flex-col gap-1 text-gray-700 text-xs">
    {label}
    {isTextarea ? (
      <textarea
        ref={inputRef}
        value={value}
        onChange={onChange}
        rows={1}
        className="border border-gray-300 rounded-md px-2 py-1 text-sm resize-none overflow-hidden focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    )}
  </label>
);
