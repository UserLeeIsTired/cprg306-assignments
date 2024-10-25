import StudentInfo from "./student-info";
import Link from 'next/link';
import StudentComponent from './../../_components/student-component';


const students = {
  student1: { name: "Alice", age: 20, id: 1 },
  student2: { name: "Bob", age: 22, id: 2 },
  student3: { name: "Charlie", age: 21, id: 3 }
};

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo/>
      <Link href="/">Back to main page</Link>
      {Object.keys(students).map((key) => (
                <StudentComponent key={key} student={students[key]} />
            ))}
    </main>
  );
}