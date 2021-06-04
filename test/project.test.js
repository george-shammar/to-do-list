const projectCreation = require('../project');


test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  expect(project.title).toBe('First project');
});

test('should set the title and description to be equal to the parameters received', () => {
  const project = projectCreation('First project', 'This is a project');
  expect(project.description).toBe('This is a project');
});