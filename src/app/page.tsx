"use client";
import { SettingsTabs } from "./components/SettingsTabs";
import * as Input from "./components/Form/Input/input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput/Index";
import * as Select from "./components/Form/Select";
import { Textarea } from "./components/Form/Textarea/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-row items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 "
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className=" grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Guilherme" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue="Condé" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
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

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-row items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
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

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select.Root placeholder="Select a country...">
              <Select.Item value="br" text="Brasil" />
              <Select.Item value="us" text="United State" />
              <Select.Item value="ar" text="Argentina" />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select.Root placeholder="Select a timezone...">
              <Select.Item value="br" text="Pacific Standard Time (PST)" />
              <Select.Item value="us" text="Pacific Standard Time (PST)" />
              <Select.Item value="ar" text="Pacific Standard Time (PST)" />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
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
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-100"
                  >
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-100"
                  >
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>

                  <button
                    type="button"
                    className=" rounded-lg p-2 hover:bg-zinc-100"
                  >
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>

                  <button
                    type="button"
                    className=" rounded-lg p-2 hover:bg-zinc-100"
                  >
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>

                  <button
                    type="button"
                    className=" rounded-lg p-2 hover:bg-zinc-100"
                  >
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
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
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
