import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Counter from "./Counter.vue";

test("點擊按鈕後計數器應該增加", async () => {
  const wrapper = mount(Counter);
  expect(wrapper.text()).toContain("Count is 0");

  await wrapper.find("button").trigger("click");

  expect(wrapper.text()).toContain("Count is 1");
});
