const projectCreation = require('../project');

const project = projectCreation('First project', 'This is a project');

test('should set the title to be equal to the first parameter received', () => {
  expect(project.title).toBe('First project');
});

test('should set the title to be equal to the first parameter received', () => {
  expect(project.title).not.toBeNull();
});

test('should set the title to be equal to the first parameter received', () => {

  expect(project.description).not.toBeNull();
});

test('should set the title to be equal to the first parameter received', () => {
  expect(project.title).not.toBeUndefined();
});

test('should set the title to be equal to the first parameter received', () => {
  expect(project.description).not.toBeUndefined();
});

test('should set the description to be equal to the  second parameter received', () => {
  expect(project.description).toBe('This is a project');
});

test('should return an empty todos array', () => {
  expect(project.todos).toEqual([]);
});

test('should set the title to the first parameter passed to the edit function', () => {
  project.edit('title edited', 'description edited');
  expect(project.title).toBe('title edited');
});

test('the title should not be equal to --First project--', () => {
  project.edit('title edited', 'description edited');
  expect(project.title).not.toBe('First project');
});

test('should set the title to the first parameter passed to the edit function', () => {
  project.edit('title edited', 'description edited');
  expect(project.description).toBe('description edited');
});

test('the description should not be equal to --This is a project--', () => {
  project.edit('title edited', 'description edited');
  expect(project.description).not.toBe('This is a project');
});
