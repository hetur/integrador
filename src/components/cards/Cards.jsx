import Card from "../card/Card";
import styled from "styled-components"

const Div = styled.div`
display: flex;
justify-content: space-evenly;
`;

export default function Cards(props) {
   const { characters } = props;

   return (
      <Div>
         {characters.map(({ id, name, species, gender, image }) => {
            return <Card
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => props.onClose (id)} />;
         })}

      </Div>
   );
}
