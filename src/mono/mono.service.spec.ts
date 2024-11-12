import { HttpModule } from '@nestjs/axios'
import { Test, TestingModule } from '@nestjs/testing'
import { MonoModule } from './mono.module'
import { MonoService } from './mono.service'

describe('MonoService', () => {
	let monoService: MonoService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				MonoModule,
				HttpModule.register({ headers: { 'X-Token': process.env.MONO_API } })
			],
			providers: [MonoService]
		}).compile()

		monoService = module.get<MonoService>(MonoService)
	})

	it('should be defined', () => {
		expect(monoService).toBeDefined()
	})

	it('It should make a query', async () => {
    const data = await monoService.createInvoice(2000)

    const object = {
			invoiceId: expect.any(String),
			pageUrl: expect.any(String)
		}

		expect(data).toEqual(expect.objectContaining(object))
	})
})
