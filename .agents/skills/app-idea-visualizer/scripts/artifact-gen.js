/**
 * Generates the HTML for the feature map artifact.
 * 
 * @param {Object} data - The feature map data structure
 * @returns {string} - The generated HTML string
 */
function generateArtifact(data) {
  // Color mapping based on tier
  const colors = {
    '🟢': '#00BFA5', // Straightforward
    '🟡': '#FFB300', // Moderate
    '🔴': '#FF5252', // Hard
    '⚫': '#757575'  // Defer
  };

  // Aesthetic: blueprint/schematic dark-themed UI
  const html = `
    <div class="feature-map" style="background: #121212; color: #fff; padding: 20px; font-family: 'Courier New', monospace;">
      <h2 style="color: ${colors['🟡']}">${data.appName} - Feature Map</h2>
      <div class="node-container" style="display: flex; flex-wrap: wrap; gap: 15px;">
        ${data.features.map(f => `
          <div class="node" 
               onclick="sendPrompt('Deep dive: how would I actually build ${f.name} for ${data.appName}?')"
               style="width: 140px; padding: 10px; border: 1px solid ${colors[f.tier]}; border-left: 5px solid ${colors[f.tier]}; cursor: pointer;">
            <strong>${f.name}</strong>
            <p style="font-size: 0.8em;">${f.subtitle}</p>
          </div>
        `).join('')}
      </div>
      <div class="legend" style="margin-top: 20px; font-size: 0.8em;">
        ${Object.entries(colors).map(([icon, color]) => `
          <span style="color: ${color}">${icon}</span>
        `).join(' ')}
      </div>
    </div>
  `;
  return html;
}

module.exports = { generateArtifact };
