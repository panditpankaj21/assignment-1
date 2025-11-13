
export const LabelledSelect = ({ label, value, onChange, options }) => (
  <label className="flex flex-col gap-1 text-gray-700 text-xs">
    {label}
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);
