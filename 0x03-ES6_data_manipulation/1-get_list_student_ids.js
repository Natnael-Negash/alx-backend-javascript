export default function getListStudents(students) {
    if (!Array.isArray(students)) return[];
    return students.map((el) => el.id);
}