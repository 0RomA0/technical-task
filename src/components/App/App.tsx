import './App.css';
import Input from '../Input/Input.tsx';
import Toast from '../Toast/Toast.tsx';
import SidebarMenu from '../SidebarMenu/SidebarMenu.tsx';

function App() {
  return (
    <>
      <Input name="Passeord" type="password" placeholder="Enter password" />
      {/* <Toast type="success" message="Successful download!" />
      <Toast type="error" message="Something went wrong!" /> */}
      <Toast type="info" message="Loading..." duration={3000} closable={true} />
      <SidebarMenu
        isOpen={true}
        menuItems={[
          { title: 'Home' },
          {
            title: 'Services',
            children: [{ title: 'Web Development' }, { title: 'UI/UX Design' }],
          },
          { title: 'Contact' },
        ]}
      />
    </>
  );
}

export default App;
