$(function() {

  var datascource = {
    'name': 'Alexey Luptacov',
    'title': 'Project Director',
    'children': [
      { 'name': 'Alesya Voronina', 'title': 'Deputy Project Director' ,
        'children': [
          { 'name': 'Dmitrii Golovkin', 'title': 'Process 901' },
          { 'name': 'Alexander Gerasimov', 'title': 'Process 1102' },
          { 'name': 'Alexander Ershov', 'title': 'Process 1105' },
        ]
      },
      { 'name': 'Nikita Voronin', 'title': 'Engineering Manager',
        'children': [
          { 'name': 'Svetlana Senotrusova', 'title': 'Process Piping' },
          { 'name': 'Nataliya Dobrovolskaya', 'title': 'Architectural Civil' },
          { 'name': 'Ekaterina Kuznetcova', 'title': 'Electrical FF Telecom' },
          { 'name': 'Alexander Balandin', 'title': 'C&I' },
          { 'name': 'Dmitry Spitcyn', 'title': 'Heating Ventilation' }
        ]},
      { 'name': 'George Petrov', 'title': 'Procurement Manager'  },
      { 'name': 'Evgenii Abolin', 'title': 'Quality Manager',
        'children': [
          { 'name': 'Eugenia Kozhukhova', 'title': 'QC' },
        ]},
    ]
  };

  $('#chart-container').orgchart({
    'visibleLevel': 3,
    'pan': true,
    'data' : datascource,
    'nodeContent': 'title',
    'createNode': function($node, data) {
      $node.on('click', function(event) {
        if (!$(event.target).is('.edge, .toggleBtn')) {
          var $this = $(this);
          var $chart = $this.closest('.orgchart');
          var newX = window.parseInt(($chart.outerWidth(true)/2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true)/2));
          var newY = window.parseInt(($chart.outerHeight(true)/2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true)/2));
          $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
        }
      });
    }
  });

});
