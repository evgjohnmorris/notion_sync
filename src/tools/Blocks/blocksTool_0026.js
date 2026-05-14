/**
 * Generated Tool: blocksTool_0026
 * Domain: Blocks
 * ID: 0026
 */
exports.blocksTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0026:', error);
    throw error;
  }
};
