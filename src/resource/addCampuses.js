import Campus from "../models/Campus";

const campuses = [
  "연세대학교 신촌캠퍼스",
  "연세대학교 미래캠퍼스",
  "고려대학교 안암캠퍼스",
  "고려대학교 세종캠퍼스",
];

export const addCampuses = async () => {
  const result = [];
  for (let i = 0; i < campuses.length; ++i) {
    const campus = await Campus.create({
      name: campuses[i],
    });
    result.push(campus);
  }
  return result;
};
