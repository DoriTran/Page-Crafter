Finish progress (100%)
Github link: https://github.com/DoriTran/Page-Crafter
Deploy link: https://page-crafter-ne56.vercel.app/admin

/====== How to run (Assume you already has git and VScode on your device):
→ Clone repository using the github link
git clone https://github.com/DoriTran/Page-Crafter
→ Open repository using VScode and run install package command
npm install
→ Run the repository
npm run dev

/====== Detail report:
*. Finish admin website view
  Main part:
	1. Able to drag from left panel to main panel
	2. Able to edit by click on the instance and edit in the right panel
	3. Components that have been implemented: Button, Paragraph
	4. Show what mouse position on the main panel, what dragging by the mouse, total number of current instances
	5. Save button that save to localstorage
  Optional part:
	6. Extra component that have been implemented:
	  • Container: a box can be display as block or flex with its css configurable.
	  • Heading: tag heading for header purpose
	  • Checkbox: a checkbox with its label
	  • Radio group: a radio group with its labels
	  • Select: a select input
	  • InputField: a input field that can config to any input (This include Image upload)
	  • Image: Show image uploaded - can choose image from local device (Image stay as temporary url)
	7. Can edit detail of each component in the right panel
	(I'm not implement the directly edit because it will make the main panel more messy since there are more and more configurations)
	8. Undo / Redo feature
	9. Import / Export data to file feature
	10. Clear all instances features
    11. You can't interact will components in the main panel (input, uncheck ...) → This make Admin role as builder only

*. Finish consumer website view
  Main part:
	12. Show paragraph and button
	13. Button alert the message onClick
  Optional part:
	14. Interact with other components (Uncheck, Select, Type input)
	
/====== Technology and knownlegde used:
→ Main tenology: ReactJS, NextJS
→ Language: Typescript
→ CSS: SCSS in module type (_.module.scss)
→ Other support libraries: Mui material, Fontawesome Icon, React Query, SASS, Lodash, store2
→ Source is build base on App Router of NextJS
	  
/======  Website architure:
Utilizing NextJS framework for building a website has both server client side rendering, it is based on the following principles:
1. Server-Side Rendering (SSR): Ensuring that pages are pre-rendered on the server, fetch data right on server side
2. Client-Side Rendering (CSR): All interactive components are client side
3. Static Site Generation (SSG): Any pages that not require dynamic data fetching will be staticly generated, reduces the need of server side resource
4. Api Routes: Using the latest NextJS 14 routing → App Router
5. Component-Based Structure: Build organized and reusable React components
6. Single page application (SPA): No need to reload page on interact with link

/======  Design Principles:
1. Performance Optimization: Leverages NextJS features such as optimization, dynamic import ensure the website is fast and stable
2. Scalability: Able to scale out the source code as new demain come

/======  Design pattern:
  • Adapter → Adap mui material and other library into easy-to-use and uniformity as those ApComponent (in src/components folder)
  • Composite → This implement the Container (flex div) can contain other Container and Instance:
      Instance interface and Container extended it
	  All Container now is Instance and can contain list of Instances