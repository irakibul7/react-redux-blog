const initialState = {
  blogs: [
    {
      id: 1,
      tag: "Tech",
      title: "Boost your conversion rate",
      thumbnail:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      authorName: "Brian Heater",
      date: "August 23, 2022",
      readingTime: "6 min read",
    },
    {
      id: 2,
      tag: "Tech",
      title: "Apple delivers iPadOS 16.1 beta ahead of iOS 16 fall release",
      thumbnail:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorAvatar: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      authorName: "Brian Heater",
      date: "August 23, 2022",
      readingTime: "11 min read",
    },
    {
      id: 3,
      tag: "Sports",
      title: "Manchester United winners, losers and ratings as Ten Hag revolution takes flight against Liverpool",
      thumbnail:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb5c15b7a61567406/63047b5324aa4467bbb3b9eb/UNITED_LIV16-9.jpg?quality=80&format=pjpg&auto=webp&width=1000",
      authorAvatar: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb807a21c597295ed/60d9c31bcbc6070f5c36f1f2/0b73d26f8d620353d238196bbe55e31ed6a60e34.jpg?quality=100&format=pjpg&auto=webp&width=60",
      authorName: "James Robson",
      date: "August 23, 2022",
      readingTime: "6 min read",
    },
    {
      id: 4,
      tag: "Entertainment",
      title: "‘House of the Dragon’ series premiere is the biggest in HBO’s history, with almost 10 million viewers",
      thumbnail:
        "https://techcrunch.com/wp-content/uploads/2022/07/house-of-the-dragon-ka-1920.jpg?w=1390&crop=1",
      authorAvatar:
        "https://cdn.cnn.com/cnnnext/dam/assets/220413113637-03-lisa-france-headshots-small-11.jpg",
      authorName: "Lauren Forristal",
      date: "August 23, 2022",
      readingTime: "6 min read",
    },
    {
      id: 5,
      tag: "Tech",
      title: "Meta officially rolls out its new metaverse ID system",
      thumbnail:
        "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1239009531.jpg?w=1390&crop=1",
      authorAvatar: "https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-1232608943.jpg?resize=150,100",
      authorName: "Andrew Mendez",
      date: "August 24, 2022",
      readingTime: "6 min read",
    },
    {
      id: 6,
      tag: "Sports",
      title: "Klopp responds after Fernandes' antics rile up Liverpool in loss to Man Utd",
      thumbnail:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt887eb98c76acc5d5/63040a09fad0ed7e83211aa9/Jurgen_Klopp_Erik_Ten_Hag_2022-23.jpg?quality=80&format=pjpg&auto=webp&width=876",
      authorAvatar:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb807a21c597295ed/60d9c31bcbc6070f5c36f1f2/0b73d26f8d620353d238196bbe55e31ed6a60e34.jpg?quality=100&format=pjpg&auto=webp&width=60",
        authorName: "James Robson",
        date: "August 23, 2022",
      readingTime: "8 min read",
    },
  ],
  filter: {
    tag: '',
    author: '',
    title: ''

  },
};

export default initialState;
