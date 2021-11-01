export const SmallProductListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <p>
      Name: {name} Age: {age}
    </p>
  );
};
