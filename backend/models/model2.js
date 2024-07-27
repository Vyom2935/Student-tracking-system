// for student certificates form create a schema here
const mongoose = require('mongoose');

const academicDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  mentorName:{type:String,required:true},
  studentClass: { type: String, required: true },
  competitionsImage: { type: Buffer },
  projectpresentationsImage: { type: Buffer },
  paperPresentationsImage: { type: Buffer },
  onlineCourseImage: { type: Buffer },
  copyrightImage: { type: Buffer },
  internshipImage: { type: Buffer },
  certificationImage: { type: Buffer },
});

const AcademicsData = mongoose.model('AcademicsData', academicDataSchema);

module.exports = AcademicsData;
