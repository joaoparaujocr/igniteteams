import Group from "src/interfaces/Group";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: Group;
    }
  }
}
