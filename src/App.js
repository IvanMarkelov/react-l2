import React, { Component } from "react";
import "./App.css";

function Worker(props) {

  const [dailySalary, setDailySalary] = React.useState(props.dailySalary);
  const [daysClocked, setDaysClocked] = React.useState(props.daysClocked);

  const changeSalary = (e) => {
    setDailySalary(e.target.value);
  }

  const changeDays = (e) => {
    setDaysClocked(e.target.value);
  }

  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td><input onChange={changeDays} value={daysClocked}/></td>
      <td><input onChange={changeSalary} value={dailySalary} /></td>
      <td>{dailySalary * daysClocked}</td>
    </tr>
  );
}

class App extends Component {
  state = {
    workers: [
      {
        firstName: "Сергей",
        lastName: "Петров",
        daysClocked: 17,
        dailySalary: 2000,
      },
      {
        firstName: "Петр",
        lastName: "Сергеев",
        daysClocked: 12,
        dailySalary: 1800,
      },
      {
        firstName: "Василий",
        lastName: "Агапов",
        daysClocked: 19,
        dailySalary: 1500,
      },
      {
        firstName: "Олег",
        lastName: "Иванов",
        daysClocked: 20,
        dailySalary: 2500,
      },
      {
        firstName: "Анна",
        lastName: "Онегина",
        daysClocked: 18,
        dailySalary: 3300,
      },
      {
        firstName: "Ирина",
        lastName: "Ревенко",
        daysClocked: 14,
        dailySalary: 3000,
      },
      {
        firstName: "Иван",
        lastName: "Иванов",
        daysClocked: 14,
        dailySalary: 2000,
      },
    ],
  };

  calculatePayments = () => {
    let payments = 0;
    this.state.workers.forEach((worker) => {
      payments +=
        parseFloat(worker.dailySalary) * parseFloat(worker.daysClocked);
    });
    return payments;
  };

  handleTableChange = (e) => {
    console.log(e);
    const workers = this.state.workers;

    this.setState({
      workers: workers,
    });
  }

  render() {
    return (
      <div>
        <table>
          <caption>Список сотрудников</caption>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Количество отработанных дней</th>
              <th>Дневная ставка</th>
              <th>Всего заработано</th>
            </tr>
          </thead>
          <tbody>
            {this.state.workers.map((worker) => {
              return (
                <Worker
                  onTableChange={this.handleTableChange}
                  firstName={worker.firstName}
                  lastName={worker.lastName}
                  dailySalary={worker.dailySalary}
                  daysClocked={worker.daysClocked}
                />
              );
            })}
          </tbody>
        </table>

        <h5>Общая сумма выплат: {this.calculatePayments()}</h5>
      </div>
    );
  }
}

export default App;
