export default interface Story {
  storyId: number;
  storyImage: string;
  swipeText?: string;
  onPress?: () => void;
}
