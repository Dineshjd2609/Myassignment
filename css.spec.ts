import test from "@playwright/test"
test("csslocator",async({page})=>{
await page.goto("https://login.salesforce.com")
await page.locator("[class='input r4 wide mb16 mt8 username']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("[type='password']").fill("TestLeaf@2025")
await page.locator("[id='Login']").click()
let title=await page.title()
console.log("The titles",title)
}
)