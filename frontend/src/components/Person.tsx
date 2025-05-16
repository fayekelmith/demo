export interface Person {
  id: number;
  name: string;
  email: string;
}

export const PersonComponent = ({ person }: { person: Person }) => {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>{person.email}</p>
    </div>
  );
};
