var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response) {
      this.props.updateRepos(response.data);
    }.bind(this));
  },

  render: function() {
    return (
      <div className="jumbotron">
        <h1>Criando componente React</h1>
        <p>Componente que exibe as informações do usuário do GitHub</p>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Nome do usuário: </label>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: fgleilsonf"
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Consultar
            </button>
          </form>
        </div>
      </div>
    );
  }
});

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

module.exports = SearchUser;