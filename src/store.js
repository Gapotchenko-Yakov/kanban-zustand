const { create } = require("zustand");

const store = (set = {
  tasks: [
    {
      title: "TestTask",
      state: "PLANNED",
    },
  ],
});

export const useStore = create(store);
