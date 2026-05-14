/**
 * Generated Tool: blocksTool_0636
 * Domain: Blocks
 * ID: 0636
 */
exports.blocksTool_0636 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0636:', error);
    throw error;
  }
};
