import styles from "./page.module.scss";

const AdminPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>
        <ComponentPanel />
        <div className={styles.main}>
          <Preview />
          <Editor />
        </div>
        <InfoPanel />
      </div>
    </div>
  );
};

export default AdminPage;
