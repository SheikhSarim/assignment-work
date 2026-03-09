# Student – StudentProfile One-to-One Relationship (NestJS + PostgreSQL + TypeORM)

## Project Overview

This assignment demonstrates a **One-to-One relationship** using **NestJS**, **PostgreSQL**, and **TypeORM**.

The system manages **Students** and their **Student Profiles**.

Each **Student** has exactly **one StudentProfile**, and each **StudentProfile** belongs to exactly **one Student**.

The application only implements two operations:

* **Create Student with Profile**
* **Delete Student with Profile**

The deletion process follows a safe database practice where **actual data (StudentProfile)** is deleted before **reference data (Student)** to avoid foreign key constraint errors.

---

# Technologies Used

* **NestJS** – Backend framework
* **PostgreSQL** – Relational Database
* **TypeORM** – ORM for database operations
* **REST API** – HTTP endpoints for interaction

---

# Folder Structure

```
src
 ┣ student-profiles
 ┃ ┣ dto
 ┃ ┃ ┗ create-student-profile.dto.ts
 ┃ ┣ entities
 ┃ ┃ ┗ student-profile.entity.ts
 ┃ ┣ http
 ┃ ┣ provider
 ┃ ┃ ┗ student-profiles.service.ts
 ┃ ┣ student-profiles.controller.ts
 ┃ ┗ student-profiles.module.ts
 ┣ students
 ┃ ┣ dto
 ┃ ┃ ┗ create-student.dto.ts
 ┃ ┣ entities
 ┃ ┃ ┗ student.entity.ts
 ┃ ┣ http
 ┃ ┃ ┣ student.delete.endpoint.http
 ┃ ┃ ┗ student.post.endpoint.http
 ┃ ┣ provider
 ┃ ┃ ┗ students.service.ts
 ┃ ┣ students.controller.ts
 ┃ ┗ students.module.ts
 ┣ app.controller.spec.ts
 ┣ app.controller.ts
 ┣ app.module.ts
 ┣ app.service.ts
 ┗ main.ts
```

This structure follows a **feature-based modular architecture** recommended for NestJS projects.

---

# Database Design

Two tables are created:

## Students Table

| Column           | Type    | Description                            |
| ---------------- | ------- | -------------------------------------- |
| id               | integer | Primary Key                            |
| name             | varchar | Student name                           |
| email            | varchar | Student email                          |
| studentProfileId | integer | Foreign key referencing StudentProfile |

---

## StudentProfiles Table

| Column  | Type    | Description          |
| ------- | ------- | -------------------- |
| id      | integer | Primary Key          |
| age     | integer | Student age          |
| address | varchar | Student address      |
| phone   | varchar | Student phone number |

---

# Entity Relationship Diagram (ERD)

![Student ERD](./ERD-diagram/ERD%20Diagram.png)

Relationship Type:

```
Student 1 ───── 1 StudentProfile
```

---

# One-to-One Implementation

The relationship is implemented using TypeORM decorators:

```ts
    @OneToOne(() => StudentProfile, {
        cascade: true,
        eager: true,
        nullable: true,
    })
    @JoinColumn()
    studentProfile!: StudentProfile;
```

Explanation:

* **@OneToOne** defines the relationship type.
* **@JoinColumn** creates the **foreign key in the Student table**.

---

# Create Operation Flow

When creating a student, the application performs the following steps:

```
API Request
     ↓
StudentsController
     ↓
StudentsService
     ↓
Create StudentProfile
     ↓
Save Profile to Database
     ↓
Create Student with profileId
```

---

# Delete Operation Flow

To maintain data integrity and avoid foreign key errors:

```
Find Student by Id
     ↓
Delete StudentProfile
     ↓
Delete Student
```

This ensures that **dependent data is removed first** before removing the parent record.

---

# Example API Request

 Create Student
```
POST /students
```

## Request Body

```json
{
  "name": "Jane Smith",
  "email": "janesmith@example.com",
  "studentProfile": {
    "age": 22,
    "address": "456 Elm Avenue, Townsville",
    "phone": "0987654321"
  }
}
```

---

# Expected Database Result

### Students Table

| id | name       | email                                                 | profileId |
| -- | ---------- | ----------------------------------------------------- | --------- |
| 1  | Jane Smith | [janesmith@example.com](mailto:janesmith@example.com) | 1         |

---

### StudentProfiles Table

| id | age | address                    | phone      |
| -- | --- | -------------------------- | ---------- |
| 1  | 22  | 456 Elm Avenue, Townsville | 0987654321 |

---

# Key Concepts Demonstrated

* NestJS modular architecture
* TypeORM entity relationships
* One-to-One database relationships
* Safe deletion order
* REST API endpoint design

---

# Conclusion

This project demonstrates how a **One-to-One relationship** can be implemented in a NestJS application using TypeORM and PostgreSQL.

The system ensures proper database integrity by creating and deleting related records in the correct order.

---

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
