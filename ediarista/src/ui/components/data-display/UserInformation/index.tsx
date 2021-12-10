import { Avatar, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  picture: string;
  name: string;
  rating: number;
  description: string;
};

const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "avatar name" "avatar rating" "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
`;

const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

const UserDescription = styled("div")`
  grid-area: description;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;

const UserInformation = ({ picture, name, rating, description }: Props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
