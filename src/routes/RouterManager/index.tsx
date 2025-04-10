// here your routing logic will come
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../index";
import { VisitorLayout } from "../RouterLazyImports";
import { Wrappers } from "src/containers";

const Index = () => {
  return (
    <>
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
    </>
  );
};
export default Index;
