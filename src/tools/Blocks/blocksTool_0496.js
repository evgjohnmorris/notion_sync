/**
 * Generated Tool: blocksTool_0496
 * Domain: Blocks
 * ID: 0496
 */
exports.blocksTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0496:', error);
    throw error;
  }
};
