import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams, useLocation } from "react-router-dom";
import scenarioData from "../../data/scenarios.json";

export default function MainPageLayout() {
  const scenarios = scenarioData;
  const params = useParams();
  const location = useLocation();
  // console.log(JSON.stringify(params, null, 2));
  // console.log(JSON.stringify(location, null, 2));
  const currentId = parseInt(params.scenarioId); // 此处小坑，url中的id是字符，必须转换为数字以后才能用于筛选
  const currentScenario = scenarios.filter((item) => item.id === currentId); // filter 返回的是[{...}]，如果需要返回{}可使用find
  let pageTitle;
  location.pathname === "/create"
    ? (pageTitle = "Create New Scenario")
    : (pageTitle = currentScenario[0]?.title || "Scenarios");
  // 可选链运算符（?.） 用于访问对象的属性或调用函数。如果使用此运算符访问的对象或调用的函数是 undefined 或 null，则表达式会短路并计算为 undefined，而不是抛出错误

  return (
    <>
      <main className="h-screen flex flex-col">
        <Navbar pageName={pageTitle} />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
