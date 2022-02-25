CREATE SCHEMA empresa_db;

USE empresa_db;

CREATE TABLE IF NOT EXISTS departments(
	deptno INT(2) PRIMARY KEY NOT NULL,
	dname VARCHAR(14) NULL,
	loc varchar(13) NULL
);

CREATE TABLE IF NOT EXISTS employees(
	empno INT(4) PRIMARY KEY NOT NULL,
	ename VARCHAR(10) NULL,
	job VARCHAR(9) NULL,
	mgr INT(4) NULL,
	hiredate DATE NULL,
	sal FLOAT(7) NULL,
	comm FLOAT(7) NULL,
	deptno INT(2) NULL
);

ALTER TABLE employees ADD FOREIGN KEY(deptno) REFERENCES departments(deptno);

INSERT INTO departments(deptno, dname, loc) VALUES(10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO departments(deptno, dname, loc) VALUES(20, 'RESEARCH', 'DALLAS');
INSERT INTO departments(deptno, dname, loc) VALUES(30, 'SALES', 'CHICAGO');
INSERT INTO departments(deptno, dname, loc) VALUES(40, 'OPERATIONS', 'BOSTON');

INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7369, 'SMITH', 'CLERK', 7902, '17-DEC-80', 800, null, 20);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7499, 'ALLEN', 'SALESMAN', 7698, '20-FEB-81', 1600, 300, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7521, 'WARD', 'SALESMAN', 7698, '22-FEB-81', 1250, 500, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7566, 'JONES', 'MANAGER', 7839, '02-APR-81', 2975, null, 20);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7654, 'MARTIN', 'SALESMAN', 7698, '28-SEP-81', 1250, 1400, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7698, 'BLAKE', 'MANAGER', 7839, '01-MAY-81', 2850, null, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7782, 'CLARK', 'MANAGER', 7839, '09-JUN-81', 2450, null, 10);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7788, 'SCOTT', 'ANALYST', 7566, '09-DEC-82', 3000, null, 20);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7839, 'KING', 'PRESIDENT', null, '17-NOV-81', 5000, null, 10);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7844, 'TURNER', 'SALESMAN', 7698, '08-SEP-81', 1500, 0, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7876, 'ADAMS', 'CLERK', 7788, '12-JAN-83', 1100, null, 20);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7900, 'JAMES', 'CLERK', 7698, '03-DEC-81', 950, null, 30);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7902, 'FORD', 'ANALYST', 7566, '03-DEC-81', 3000, null, 20);
INSERT INTO employees(empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES(7934, 'MILLER', 'CLERK', 7782, '23-JAN-82', 1300, null, 10);
