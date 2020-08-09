import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import formatDate from '../../utils/formatDate';
import logoImg from '../../assets/logo-glpi.png';

import { Header, TicketInfo } from './styles';

interface TicketParams {
  id: string;
}

interface Ticket {
  id: number;
  name: string;
  content: string;
  date: string;
  date_creation: string;
}

const Ticket: React.FC = () => {
  const [ticket, setTicket] = useState<Ticket | null>(null);

  const { params } = useRouteMatch<TicketParams>();
  useEffect(() => {
    api
      .get(`Ticket/${params.id}?session_token=oo8ih38ggeilpmde2jpidg5cu8`)
      .then((response) => {
        setTicket(response.data);
      });
  }, [params.id]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Glpi logo" width="150px" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      {ticket ? (
        <TicketInfo>
          <header>
            <div>
              <strong>{parse(ticket.name)}</strong>
              <p>{parse(ticket.content)}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{ticket.id}</strong>
              <span>Código</span>
            </li>
            <li>
              <strong>{formatDate(ticket.date_creation)}</strong>
              <span>Data de abertura</span>
            </li>
            <li>
              <strong>{formatDate(ticket.date)}</strong>

              <span>Data de fechamento</span>
            </li>
          </ul>
        </TicketInfo>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default Ticket;
