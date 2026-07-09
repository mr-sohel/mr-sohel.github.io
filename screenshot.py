from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto('http://localhost:4321')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='screenshot_hero.png')
    
    # Scroll to about
    page.evaluate("document.getElementById('about').scrollIntoView()")
    page.wait_for_timeout(500)
    page.screenshot(path='screenshot_about.png')
    
    # Scroll to projects
    page.evaluate("document.getElementById('projects').scrollIntoView()")
    page.wait_for_timeout(500)
    page.screenshot(path='screenshot_projects.png')

    browser.close()
