import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/index.tsx"),route("apropos","routes/apropos.tsx"),route("contact","routes/contact.tsx")] satisfies RouteConfig;
