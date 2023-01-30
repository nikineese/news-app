import styled from "styled-components";

type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
  [x: string]: any;
};
export const Input = styled.input`
  width: 200px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 4px;
`;
export const Search = ({ search, setSearch, ...rest }: SearchProps) => {
  return (
    <Input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      {...rest}
    />
  );
};
