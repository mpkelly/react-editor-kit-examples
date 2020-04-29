export const PaperEditorContent = [
  {
    type: "fixed-title",
    children: [{ text: "Meeting notes for Monday 1st January 2020" }]
  },
  { type: "paragraph", children: [{ text: "" }] },
  { type: "divider", children: [{ text: "" }], size: 1 },
  { type: "paragraph", breakoutBottom: true, children: [{ text: "" }] },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "h3",
    children: [{ text: "Actionable items" }],
    at: { path: [5, 0], offset: 17 }
  },
  {
    type: "todo-list",
    children: [
      {
        type: "todo-item",
        complete: true,
        children: [
          {
            text:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          }
        ]
      },
      {
        type: "todo-item",
        complete: false,
        children: [
          { text: "Quis autem vel eum iure reprehenderit qui in ea " },
          {
            type: "link",
            editing: false,
            url:
              "https://codesandbox.io/s/small-waterfall-0e31g?file=/src/paper/PaperEditor.tsx",
            children: [{ text: "voluptate" }]
          },
          { text: " velit esse quam nihil molestiae consequatur " },
          {
            type: "mention",
            children: [{ text: "" }],
            value: {
              name: "Ian Thomas",
              imageUrl: "https://i.pravatar.cc/80?img=9"
            }
          },
          { text: " " }
        ]
      },
      {
        type: "todo-item",
        complete: false,
        children: [
          {
            text:
              "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur"
          }
        ]
      }
    ],
    resizedWidth: 759
  },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "h3",
    children: [{ text: "Important issues\n" }],
    at: { path: [4, 0], offset: 16 }
  },
  {
    type: "ordered-list",
    children: [
      {
        type: "list-item",
        children: [
          {
            text:
              "You can turn off the resize handles by locking the page at the top"
          }
        ]
      },
      {
        type: "list-item",
        children: [
          { text: "Always wear a mask and wash your hands with " },
          { text: "alcohol-based", underline: true },
          { text: " soap" }
        ],
        at: { path: [2, 0], offset: 0 }
      },
      {
        type: "list-item",
        children: [
          { text: "Practise social distancing " },
          { text: "at all times", italic: true }
        ]
      },
      {
        type: "list-item",
        children: [
          {
            text:
              "Only leave your home or be in contact with other people when "
          },
          { text: "absolutely necessary", bold: true }
        ]
      }
    ]
  },
  { type: "h3", children: [{ text: "" }], at: { path: [4, 0], offset: 0 } },
  {
    type: "h3",
    children: [{ text: "Random Video\n" }],
    at: { path: [4, 0], offset: 0 }
  },
  {
    type: "video",
    url: "https://www.youtube.com/watch?v=fTFoBr5LJGE",
    children: [{ text: "" }]
  },
  {
    type: "h3",
    children: [{ text: "\nOther Things\n" }],
    at: { path: [9, 0], offset: 12 }
  },
  {
    type: "table",
    headerRow: "true",
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Lorem Ipsum Items", bold: true }]
              }
            ]
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Actions", bold: true }],
                textAlign: "right"
              }
            ]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Ut enim ad minima veniam, quis nostrum" }]
              }
            ]
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "TODO" }],
                textAlign: "right"
              }
            ]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  { text: "velit esse quam nihil molestiae consequatur" }
                ]
              }
            ]
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "COMPLETE" }],
                textAlign: "right"
              }
            ]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  { text: "Sed ut perspiciatis unde omnis iste natus" }
                ]
              }
            ]
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "PENDING" }],
                textAlign: "right"
              }
            ]
          }
        ]
      }
    ]
  },
  { type: "paragraph", children: [{ text: "" }] }
];
