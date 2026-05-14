/**
 * Generated Tool: blocksTool_0441
 * Domain: Blocks
 * ID: 0441
 */
exports.blocksTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0441:', error);
    throw error;
  }
};
