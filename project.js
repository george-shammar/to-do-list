const projectCreation = (title, description) => ({
  title,
  description,
  todos: [],
  edit(title, description) {
    this.title = title;
    this.description = description;
  },
});

module.exports = projectCreation;