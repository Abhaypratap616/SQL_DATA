const db = require("../config/db");
const getStudents = async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM student`);
        if(!results){
            return res.status(404).json({ message: "No students found" });
        }
        res.status(200).send (results);

    } catch (err) {
        res.status(500).json({ message: " error" });
    }
};
const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await db.query(`SELECT * FROM student WHERE id = ?`,[id]);
        if(!results){
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).send (results);
    } catch (err) {
        res.status(500).json({ message: "failed" });
    }
};
const createStudent = async (req, res) => {
    try{

        const {name, rollno,fees,medium} = req.body;
        if(!name || !age || !city){
            return res.status(400).json({ message: "Please provide all details" });
        }
        const results = await db.query(`INSERT INTO student(name, age, city) VALUES(?,?,?)`,[name,rollno,fees,medium]);
        res.status(200).json({ message: "Student created successfully",results });
    } catch (err) {
        res.status(500).json({ message: "error" });
    }
}
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, rollno,fees,medium} = req.body;
        if(!name || !age || !city){
            return res.status(400).json({ message: "Please provide all details" });
        }
        const results = await db.query(`UPDATE student SET name=?, age=?, city=? WHERE id=?`,[name,rollno,fees,medium,id]);
        res.status(200).json({ message: "Student updated successfully",results });
    } catch (err) {
        res.status(500).json({ message: " error" });
    }
};
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await db.query(`DELETE FROM student WHERE id = ?`,[id]);
        res.status(200).json({ message: "Student deleted successfully",results });
    } catch (err) {
        res.status(500).json({ message: "error" });
    }
};

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };

