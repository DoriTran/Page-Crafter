export interface CardInfo {
  keyword: string;
  description: string;
  wrongRelearnRemain?: number;
  minAnswerTime?: number;
}

export interface LearningProgress {
  // negative means not learning yet
  // positive means learning
  // exceed learningPack size means learning wrong pack
  at: number;
  learningPack: CardInfo[];
  wrongPack: CardInfo[];
}

export interface LearningSettings {
  hiragana?: boolean;
  katakana?: boolean;
  flipped?: boolean;
  suffle?: boolean;
  onlyStar?: boolean;
  onlyWrong?: boolean;
  wrongRelearn?: boolean;
  auto?: number;
}

export const defaultSettings: LearningSettings = {
  hiragana: true,
  katakana: true,
  flipped: false,
  suffle: false,
  onlyStar: false,
  onlyWrong: false,
  wrongRelearn: false,
  auto: 0,
};
