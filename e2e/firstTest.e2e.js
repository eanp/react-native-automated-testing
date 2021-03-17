// describe('Example', () => {
//   beforeAll(async () => {
//     await device.launchApp();
//   });

//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should have welcome screen', async () => {
//     await expect(element(by.id('welcome'))).toBeVisible();
//   });

//   it('should show hello screen after tap', async () => {
//     await element(by.id('hello_button')).tap();
//     await expect(element(by.text('Hello!!!'))).toBeVisible();
//   });

//   it('should show world screen after tap', async () => {
//     await element(by.id('world_button')).tap();
//     await expect(element(by.text('World!!!'))).toBeVisible();
//   });
// });

// describe('Login flow test', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should have login screen', async () => {
//     await expect(element(by.id('loginView'))).toBeVisible();
//   });

//   it('should fill login form', async () => {
//     await element(by.id('usernameInput')).typeText('varunk');
//     await element(by.id('passwordInput')).typeText('test123\n');
//     await element(by.id('loginButton')).tap();
//   });

//   it('should show dashboard screen', async () => {
//     await expect(element(by.id('dashboardView'))).toBeVisible();
//     await expect(element(by.id('loginView'))).toNotExist();
//   });
// });

// describe('Login flow test', () => {
//   it('should fill login form', async () => {
//     await element(by.id('usernameInput')).typeText('varunk');
//     await element(by.id('passwordInput')).typeText('test123\n');
//     await element(by.id('loginButton')).tap();
//   });
// });

const parseSpecJson = (specJson) => {
  describe(specJson.describe, () => {
    for (let i = 0; i < specJson.flow.length; i++) {
      const flow = specJson.flow[i];
      it(flow.it, async () => {
        for (let j = 0; j < flow.steps.length; j++) {
          const step = flow.steps[j];
          const targetElement = element(by[step.element.by](step.element.value));
          if (step.type === 'assertion') {
            await expect(targetElement)[step.effect.key](step.effect.value);
          } else {
            await targetElement[step.effect.key](step.effect.value);
          }
        }
      });
    }
  });
};

//require('./tests/login');

parseSpecJson(require('./tests/login.json'));