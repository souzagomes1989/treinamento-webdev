(function() {
    'use strict';

    angular
        .module('shared')
        .factory('SearchUser', factory)

	/** @ngInject */
    function factory(SearchSkill) {
        //construtor
        function SearchUser(name, email) {
            if( !name || !email ) throw "name and email are required"; 
            this._name = name;
            this._email = email
            this._searchSkills = [];
        }

        SearchUser.prototype.getName = function(){ return this._name; }

        SearchUser.prototype.getEmail = function(){ return this._email; }

        SearchUser.prototype.getSearchSkills = function(){ return this._searchSkills; }
        SearchUser.prototype.addSearchSkills = function(searchSkill){ 
            if (!(searchSkill instanceof SearchSkill)) throw "SearchUser.addSearchSkills: Illegal Argument exception"
            this._searchSkills.push(searchSkill) 
        }
        

        /**
         * Constrói um objeto SearchUser com o dado vindo do servidor. 
         * ATENCAO: Este é um método estático
         * 
         * @param {Object} data dado vindo do servidor sem manipulação nenhuma
         * @return {SearchUser} 
         */
        SearchUser.buildFromServer = function (data) {
            var skill = new SearchUser(data.name, data.email);
            return skill;
        };

        return SearchUser;
         
    }

})();
