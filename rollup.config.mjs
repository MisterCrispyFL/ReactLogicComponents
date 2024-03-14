import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

const main = "dist/index.js";
const modules = "dist/es/index.js";
const typesPath = "dist/index.d.ts";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: main,
				format: "cjs",
				sourcemap: true,
				exports: "auto",
			},
			{
				file: modules,
				format: "es",
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				declaration: true,
				outDir: "dist",
			}),
			terser(),
		],
	},
	{
		input: "dist/es/types/index.d.ts",
		output: [{ file: typesPath, format: "esm" }],
		external: [/\.css$/],
		plugins: [dts()],
	},
];
