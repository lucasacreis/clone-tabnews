function status(request, response) {
  response.status(200).json({ chave: "Filipe Deschamps é um cara bacaninha." });
}

export default status;
