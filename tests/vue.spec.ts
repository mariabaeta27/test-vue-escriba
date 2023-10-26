import { test, expect } from '@playwright/test'
test('test', async ({ page }) => {
  //Acessando a aplicaçao
  await page.goto('http://localhost:5173/')

  const title = page.getByTestId('title')

  await expect(title).toHaveText('Lista de Usuários')

  // Abrindo modal
  const buttonAddUser = page.getByTestId('addUser')
  buttonAddUser.click()
  const titleModal = page.getByTestId('title-modal')
  await expect(titleModal).toHaveText('Novo Usuário')

  // Testando inputs

  await page.getByPlaceholder('Digite aqui o nome').click()
  await page.getByRole('contentinfo').getByRole('button', { name: 'Adicionar' }).click()
  await page.getByPlaceholder('Digite aqui o nome').fill('Maria')
  await page.getByRole('contentinfo').getByRole('button', { name: 'Adicionar' }).click()
  await page.getByPlaceholder('Digite aqui o CPF').fill('12345678910')
  await page.getByRole('contentinfo').getByRole('button', { name: 'Adicionar' }).click()
  await page.locator('input[type="date"]').fill('1994-01-10')
  await page.getByRole('contentinfo').getByRole('button', { name: 'Adicionar' }).click()

  const alertError = page.getByTestId('alert-error')

  await expect(alertError).toHaveText(
    'Error: Ops! Ocorreu o seguinte erro: Cpf informado é inválido x'
  )

  buttonAddUser.click()

  await page.getByPlaceholder('Digite aqui o nome').fill('Maria Test Play')
  await page.getByPlaceholder('Digite aqui o nome').press('Tab')
  await page.getByPlaceholder('Digite aqui o CPF').fill('90211042021')
  await page.locator('input[type="date"]').fill('1994-10-01')
  await page.getByRole('contentinfo').getByRole('button', { name: 'Adicionar' }).click()

  await page.getByRole('cell', { name: 'Maria Test Play' }).click()

  const alertMessage = page.getByTestId('alert-message')
  await expect(alertMessage).toHaveText('Sucesso! Usuário criado. x')

  let rowUser = page.getByTestId('Maria Test Play')

  await rowUser.getByRole('button').first().click()

  // Editando o Usuário
  await expect(titleModal).toHaveText('Editar Usuário')

  await page.getByPlaceholder('Digite aqui o nome').fill('Maria Test Play 2')
  await page.getByRole('button', { name: 'Editar' }).click()

  await expect(alertMessage).toHaveText('Sucesso! Usuário editado. x')

  await page.getByRole('cell', { name: 'Maria Test Play 2' }).click()

  // Filtar usuários
  await page.getByPlaceholder('Filtar Usuários').fill('Maria')
  await page.getByRole('button', { name: 'Filtrar' }).click()
  await page.getByTestId('clear-filter').click()

  rowUser = page.getByTestId('Maria Test Play 2')

  // Excluir usuário
  await rowUser.getByRole('button').nth(1).click()
  await page.getByRole('button', { name: 'x', exact: true }).click()
  await page.close()
})
