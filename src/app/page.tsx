"use client";
import { SettingsTabs } from "./components/SettingsTabs";
import * as Input from "./components/Form/Input/input";
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
  SunMoon,
} from "lucide-react";
import * as FileInput from "./components/Form/FileInput/Index";
import * as Select from "./components/Form/Select";
import { Textarea } from "./components/Form/Textarea/Textarea";
import { Button } from "./components/Button/Button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleClickAlterTheme = () => {
      if (!("f7a600910fcd" in localStorage)) {
        console.log("theme 3", !("f7a600910fcd" in localStorage));
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("f7a600910fcd", "dark");
          return;
        }

        document.documentElement.classList.add("white");
        localStorage.setItem("f7a600910fcd", "white");
        return;
      }

      const theme = localStorage.getItem("f7a600910fcd");

      document.documentElement.classList.add(theme ?? "dark");
      localStorage.setItem("f7a600910fcd", theme ?? "dark");
    };

    handleClickAlterTheme();
  }, []);

  const themCLicked = () => {
    if (document.documentElement.classList[0] === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("white");
      localStorage.setItem("f7a600910fcd", "white");
    } else {
      document.documentElement.classList.remove("white");
      document.documentElement.classList.add("dark");
      localStorage.setItem("f7a600910fcd", "dark");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          Settings
        </h1>
        <Button onClick={() => themCLicked()} type="button" variant="ghost">
          <SunMoon />
        </Button>
      </div>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-center gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center lg:justify-between dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="Firstname"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              First name
            </label>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Guilherme" />
              </Input.InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="Lastname"
                  className="text-sm font-medium text-zinc-700 lg:hidden"
                >
                  Last name
                </label>
              </div>
              <Input.InputRoot>
                <Input.InputControl defaultValue="Condé" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              E-mail address
            </label>

            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue="guilherme.dev@gmail.com"
              />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>

            <Input.InputRoot>
              <Input.InputControl
                id="role"
                type="text"
                defaultValue="Product Designer"
              />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>

            <Select.Root placeholder="Select a country...">
              <Select.Item value="br" text="Brasil" />
              <Select.Item value="us" text="United State" />
              <Select.Item value="ar" text="Argentina" />
            </Select.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>

            <Select.Root placeholder="Select a timezone...">
              <Select.Item value="br" text="Pacific Standard Time (PST)" />
              <Select.Item value="us" text="Pacific Standard Time (PST)" />
              <Select.Item value="ar" text="Pacific Standard Time (PST)" />
            </Select.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select.Root placeholder="" defaultValue="normal">
                  <Select.Item value="normal" text="Normal text" />
                  <Select.Item value="md" text="Markdown" />
                </Select.Root>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button variant="ghost" type="button">
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
