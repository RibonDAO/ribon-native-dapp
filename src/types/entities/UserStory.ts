import Story from "src/types/entities/Story";

export default interface UserStory {
  userId: number;
  userImage: string;
  userName: string;
  stories: Story[];
}
