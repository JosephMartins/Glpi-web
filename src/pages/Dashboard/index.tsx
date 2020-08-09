import React, { useState, useEffect, FormEvent } from 'react';
import parse from 'html-react-parser';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo-glpi.png';
import ticketIcon from '../../assets/ticket-icon.png';

import { Title, Form, Tickets, Error } from './styles';

interface Ticket {
  id: number;
  name: string;
  content: string;
  date: Date;
  date_creation: Date;
}

const Dashboard: React.FC = () => {
  const [newTicket, setNewTicket] = useState('');
  const [inputError, setInputError] = useState('');
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const storageTickets = localStorage.getItem('@Tickets:tickets');

    if (storageTickets) {
      return JSON.parse(storageTickets);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Tickets:tickets', JSON.stringify(tickets));
  }, [tickets]);

  async function handleAddTicket(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newTicket) {
      setInputError('Digite o codigo do chamado!');
      return;
    }

    try {
      const response = await api.get<Ticket>(
        `ticket/${newTicket}?session_token=oo8ih38ggeilpmde2jpidg5cu8`,
      );
      const ticket = response.data;

      setTickets([...tickets, ticket]);
      setNewTicket('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse chamado');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GLPI logo" width="150px" />
      <Title>Digite o código do chamado!</Title>

      <Form hasError={!!inputError} onSubmit={handleAddTicket}>
        <input
          value={newTicket}
          onChange={(e) => setNewTicket(e.target.value)}
          placeholder="Digite o código do chamado"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Tickets>
        {tickets.map((ticket) => (
          <Link
            key={ticket.id}
            to={`Ticket/${ticket.id}?session_token=oo8ih38ggeilpmde2jpidg5cu8`}
          >
            <img src={ticketIcon} alt={ticket.name} />
            <div>
              <strong>{ticket.name}</strong>
              <p>{parse(ticket.content)}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Tickets>
    </>
  );
};

export default Dashboard;

// yarn add react-icons
