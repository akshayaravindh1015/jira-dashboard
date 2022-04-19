// const getRandomId = () => {
//   return Math.random().toString() + Date.now().toString();
// };

export const INITIAL_TASKS = {
      id: Math.random().toString() + Date.now().toString(),
      title: 'Products',
      category: 'Teams',
      timestamp: new Date(),
      desc: '3 pending tasks to be fulfilled by Raj',
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      title: 'Sales',
      category: 'Teams',
      timestamp: new Date(),
      desc: 'Send Proposal to Puneet for sales prices',
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      title: 'UAT Testing',
      category: 'Products',
      timestamp: new Date(),
      desc: 'Ask Eng to setup testing',
    },