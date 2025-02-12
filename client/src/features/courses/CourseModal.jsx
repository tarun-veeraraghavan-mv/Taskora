function CourseModal({ course }) {
  return (
    <div>
      {course?.map((course) => (
        <p key={course?._id}>{course.courseTitle}</p>
      ))}
    </div>
  );
}

export default CourseModal;
