type Props = {
  value: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ value, setSearchTerm }: Props) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Escribe un producto"
    />
  );
}