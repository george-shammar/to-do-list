const projectCreation = require('../src/project');


it('should set the title and description to be equal to the parameters received', () => {
  expect(projectCreation('First project', 'This is a project')).toEqual(
    {
      title: 'First project',
      description: 'This is a project',
      todos: [],
      edit(title, description) {
        this.title = title;
        this.description = description;
      },
    },
  );
});