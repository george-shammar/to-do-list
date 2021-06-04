const projectCreation = require('../project');


test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  expect(project.title).toBe('First project');
});

test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  expect(project.description).toBe('This is a project');
});

test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  expect(project.todos).toEqual([]);
});

test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  project.edit('title edited', 'description edited');
  expect(project.title).toBe('title edited');
});

test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  project.edit('title edited', 'description edited');
  expect(project.description).toBe('description edited');
});
