describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NzFhODdiYy1hNTE1LTQzZWItODFiMC1mMzJmZTVjNzNmNjMiLCJhZG9wdGVyTmFtZSI6IkJyZW5kYSBGcmFuY28iLCJpYXQiOjE3NDExMTI5NzksImV4cCI6MTc0MTM3MjE3OX0.rQjbNzmubWgpuYP_LihnrenFb6Lhcw9wWlHILXz8Gcg`

    it('Mensagens da API', () => {
            cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/571a87bc-a515-43eb-81b0-f32fe5c73f63',
            headers:{ authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    });
});