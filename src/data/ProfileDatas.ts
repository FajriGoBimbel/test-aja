import {
  Monster1,
  Monster10,
  Monster11,
  Monster12,
  Monster2,
  Monster3,
  Monster4,
  Monster5,
  Monster6,
  Monster7,
  Monster8,
  Monster9,
} from "../../public/assets/PNG";

export interface MonstersProps {
  image: any;
}

export interface FollowersProps {
  id: number;
  image: any;
  name: string;
}

export interface FollowingProps {
  id: number;
  image: any;
  name: string;
  isFollowing: boolean;
}

export const Monsters: MonstersProps[] = [
  { image: Monster1 },
  { image: Monster2 },
  { image: Monster3 },
  { image: Monster4 },
  { image: Monster5 },
  { image: Monster6 },
  { image: Monster7 },
  { image: Monster8 },
  { image: Monster9 },
  { image: Monster10 },
  { image: Monster11 },
  { image: Monster12 },
];

export const Followers: FollowersProps[] = [
  { id: 1, image: Monster1, name: "Salsabila" },
  { id: 2, image: Monster2, name: "Al Fajri" },
  { id: 3, image: Monster3, name: "Abdulah Saad" },
  { id: 4, image: Monster4, name: "Muhammad Aji Massaid" },
  { id: 5, image: Monster5, name: "Muhammad Arifien syahputra Simbolon" },
  { id: 6, image: Monster6, name: "Abraham" },
  { id: 7, image: Monster6, name: "Trevor" },
];

export const Following: FollowingProps[] = [
  { id: 1, image: Monster1, name: "Salsabila", isFollowing: true },
  { id: 2, image: Monster2, name: "Al Fajri", isFollowing: true },
  { id: 3, image: Monster3, name: "Abdulah Saad", isFollowing: true },
  { id: 4, image: Monster4, name: "Muhammad Aji Massaid", isFollowing: true },
  {
    id: 5,
    image: Monster5,
    name: "Muhammad Arifien syahputra Simbolon",
    isFollowing: true,
  },
  { id: 6, image: Monster6, name: "Abraham", isFollowing: true },
  { id: 7, image: Monster6, name: "Trevor", isFollowing: true },
];
