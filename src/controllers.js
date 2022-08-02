import Campus from "./models/Campus";
import MajorAreas from "./models/MajorArea";
import util from "util";
import { exec } from "child_process";

export const getCampuses = async (req, res) => {
  try {
    const campuses = await Campus.find().lean();
    return res.json(campuses);
  } catch (error) {
    console.log(error);
  }
};

export const getMajorAreas = async (req, res) => {
  try {
    const majorAreas = await MajorAreas.find().lean();
    return res.json(majorAreas);
  } catch (error) {
    console.log(error);
  }
};

export const searchLectures = async (req, res) => {
  const {
    body: { campusValue, majorAreaValue, gradeValue, subjectTitle },
  } = req;

  try {
    return res.json({ hello: "hello" });
  } catch (error) {
    console.log(error);
  }
};

export const postMileage = async (req, res) => {
  const {
    lecture: { title, subnum, credit, professor, time },
    mileageObj: { grade, subjects, a1, a2, b1, b2 },
  } = req.body;

  const execp = util.promisify(exec);

  const result = await execp(
    `python3 ./zxcv.py ${grade} ${a1} ${a2} ${subjects} ${b1} ${b2} N Y`,
    {
      cwd: "./src/python",
    }
  );

  const data = JSON.parse(result.stdout);

  try {
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};
