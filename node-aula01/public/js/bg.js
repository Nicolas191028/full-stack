const colorSchemes = {
      blue: ['#332600', '#664D00', '#997300', '#CC9900', '#FFBF00', '#FFD633'],
      green: ['#330000', '#660000', '#990000', '#CC0000', '#FF0000', '#FF3333'],
      purple: ['#332600', '#664D00', '#997300', '#CC9900', '#FFBF00', '#FFD633'],
      red: ['#330000', '#660000', '#990000', '#CC0000', '#FF0000', '#FF3333'],
      teal: ['#332600', '#664D00', '#997300', '#CC9900', '#FFBF00', '#FFD633'],
      orange: ['#330000', '#660000', '#990000', '#CC0000', '#FF0000', '#FF3333'],
      pink: ['#332600', '#664D00', '#997300', '#CC9900', '#FFBF00', '#FFD633'],
      yellow: ['#330000', '#660000', '#990000', '#CC0000', '#FF0000', '#FF3333']
    };

    const columns = Object.keys(colorSchemes);

    function createColumns() {
      const wrapper = document.getElementById('wrapper');
      wrapper.innerHTML = '';
      
      columns.forEach((columnColor, index) => {
        const column = document.createElement('div');
        column.className = 'column';
        column.dataset.colorScheme = columnColor;
        
        // Create boxes for each column
        const boxCount = Math.ceil(window.innerHeight / 16); // 1rem = 16px
        for (let i = 0; i < boxCount; i++) {
          const box = document.createElement('div');
          box.className = 'box';
          column.appendChild(box);
        }
        
        wrapper.appendChild(column);
      });
    }

    function animateColumn(column, direction = 1) {
      const boxes = Array.from(column.querySelectorAll('.box'));
      const colorScheme = colorSchemes[column.dataset.colorScheme];
      
      // Get current colors
      const currentColors = boxes.map(box => {
        const color = box.style.backgroundColor;
        return colorScheme.indexOf(rgbToHex(color)) !== -1 ? 
          rgbToHex(color) : 
          colorScheme[0];
      });

      // Shift colors
      if (direction > 0) {
        const lastColor = currentColors.pop();
        currentColors.unshift(lastColor);
      } else {
        const firstColor = currentColors.shift();
        currentColors.push(firstColor);
      }

      // Apply new colors
      boxes.forEach((box, i) => {
        box.style.backgroundColor = currentColors[i] || colorScheme[0];
      });
    }

    function initializeColumns() {
      const columns = document.querySelectorAll('.column');
      columns.forEach(column => {
        const boxes = column.querySelectorAll('.box');
        const colorScheme = colorSchemes[column.dataset.colorScheme];
        
        boxes.forEach((box, index) => {
          const colorIndex = index % colorScheme.length;
          box.style.backgroundColor = colorScheme[colorIndex];
        });
      });
    }

    // Helper function to convert RGB to Hex
    function rgbToHex(rgb) {
      if (!rgb) return '#000000';
      if (rgb.startsWith('#')) return rgb;
      
      const rgbMatch = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (!rgbMatch) return '#000000';
      
      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);
      
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    // Initial setup
    createColumns();
    initializeColumns();

    // Animate each column independently
    document.querySelectorAll('.column').forEach((column, index) => {
      setInterval(() => {
        // Alternate direction based on column index
        const direction = index % 2 === 0 ? 1 : -1;
        animateColumn(column, direction);
      }, 200);
    });

    // Recreate grid on window resize
    window.addEventListener('resize', () => {
      createColumns();
      initializeColumns();
    });