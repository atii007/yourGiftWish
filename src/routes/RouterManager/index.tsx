// here your routing logic will come
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../index";
import { VisitorLayout } from "../RouterLazyImports";
import { Footer, Wrappers } from "src/containers";
import Header from "src/containers/Header";

const Index = () => {
  return (
    <>
      <Header />
      <Wrappers>
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Navigate to="/suggestion" replace />} />
            {publicRoutes.map((route, index) => (
              <Route
                path={route.path}
                element={
                  <VisitorLayout>
                    <route.component />
                  </VisitorLayout>
                }
                key={index}
              />
            ))}
            {/* {privateRoutes.map((route, index) => (
                <Route
                    path={route.path}
                    element={
                        <MemberLayout>
                            <route.component/>
                        </MemberLayout>}
                    key={index}
                />
            ))} */}
          </Routes>
        </Suspense>
      </Wrappers>
      <Footer />
    </>
  );
};
export default Index;
