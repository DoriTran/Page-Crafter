"use client";

import { AdminContext, ComponentPanel, EditorPanel, Header, Preview } from "./components";
import styles from "./page.module.scss";

const AdminPage = () => {
  return (
    <AdminContext>
      <div className={styles.page}>
        <Header />
        <div className={styles.body}>
          <ComponentPanel />
          <Preview />
          <EditorPanel />
        </div>
      </div>
    </AdminContext>
  );
};

export default AdminPage;
