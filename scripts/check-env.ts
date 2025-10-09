#!/usr/bin/env tsx

/**
 * Script de verificación de entorno local
 * Verifica que todas las herramientas necesarias estén instaladas y configuradas
 * para el desarrollo del proyecto GRAVITAD MVP
 */

import { execSync } from "child_process";
import { existsSync } from "fs";

interface ToolCheck {
  name: string;
  command: string;
  minVersion?: string;
  description: string;
}

const requiredTools: ToolCheck[] = [
  {
    name: "Node.js",
    command: "node --version",
    minVersion: "18.0.0",
    description: "Runtime de JavaScript necesario para el proyecto",
  },
  {
    name: "pnpm",
    command: "pnpm --version",
    minVersion: "8.0.0",
    description: "Gestor de paquetes para el monorepo",
  },
  {
    name: "Docker",
    command: "docker --version",
    description: "Para contenedores de desarrollo (MongoDB, Redis)",
  },
  {
    name: "Git",
    command: "git --version",
    description: "Control de versiones",
  },
  {
    name: "GitHub CLI",
    command: "gh --version",
    description: "CLI de GitHub para gestión de repositorios",
  },
];

function checkTool(tool: ToolCheck): boolean {
  try {
    const output = execSync(tool.command, { encoding: "utf-8" }).trim();
    console.log(`✅ ${tool.name}: ${output}`);

    if (tool.minVersion) {
      const version = output.replace(/[^\d.]/g, "");
      const [major, minor, patch] = version.split(".").map(Number);
      const [reqMajor, reqMinor, reqPatch] = tool.minVersion
        .split(".")
        .map(Number);

      if (
        major < reqMajor ||
        (major === reqMajor && minor < reqMinor) ||
        (major === reqMajor && minor === reqMinor && patch < reqPatch)
      ) {
        console.log(
          `⚠️  ${tool.name} version ${version} es menor a la requerida ${tool.minVersion}`
        );
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log(`❌ ${tool.name}: No encontrado`);
    console.log(`   ${tool.description}`);
    return false;
  }
}

function checkEnvironmentVariables(): boolean {
  console.log("\n🔍 Verificando variables de entorno...");

  const envFile = ".env.example";
  if (!existsSync(envFile)) {
    console.log(`⚠️  Archivo ${envFile} no encontrado`);
    return false;
  }

  console.log(`✅ Archivo ${envFile} encontrado`);
  return true;
}

function checkDockerServices(): boolean {
  console.log("\n🐳 Verificando servicios de Docker...");

  try {
    const dockerInfo = execSync("docker info", { encoding: "utf-8" });
    if (dockerInfo.includes("Server Version")) {
      console.log("✅ Docker está corriendo");
      return true;
    }
  } catch (error) {
    console.log("❌ Docker no está corriendo");
    console.log("   Ejecuta: docker-compose up -d");
    return false;
  }

  return false;
}

function checkGitHubAuth(): boolean {
  console.log("\n🔐 Verificando autenticación de GitHub...");

  try {
    const ghAuth = execSync("gh auth status", { encoding: "utf-8" });
    if (ghAuth.includes("Logged in")) {
      console.log("✅ GitHub CLI autenticado");
      return true;
    }
  } catch (error) {
    console.log("❌ GitHub CLI no autenticado");
    console.log("   Ejecuta: gh auth login");
    return false;
  }

  return false;
}

function main() {
  console.log("🚀 Verificación de Entorno Local - Proyecto GRAVITAD MVP\n");

  let allChecksPassed = true;

  // Verificar herramientas requeridas
  console.log("🔧 Verificando herramientas requeridas...\n");
  for (const tool of requiredTools) {
    const passed = checkTool(tool);
    if (!passed) {
      allChecksPassed = false;
    }
  }

  // Verificar variables de entorno
  const envCheck = checkEnvironmentVariables();
  if (!envCheck) {
    allChecksPassed = false;
  }

  // Verificar Docker
  const dockerCheck = checkDockerServices();
  if (!dockerCheck) {
    allChecksPassed = false;
  }

  // Verificar GitHub
  const githubCheck = checkGitHubAuth();
  if (!githubCheck) {
    allChecksPassed = false;
  }

  console.log("\n" + "=".repeat(50));

  if (allChecksPassed) {
    console.log("🎉 ¡Entorno verificado correctamente!");
    console.log("   Puedes proceder con el desarrollo del proyecto.");
  } else {
    console.log("⚠️  Algunas verificaciones fallaron.");
    console.log("   Revisa los errores anteriores antes de continuar.");
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export {
  checkTool,
  checkEnvironmentVariables,
  checkDockerServices,
  checkGitHubAuth,
};
