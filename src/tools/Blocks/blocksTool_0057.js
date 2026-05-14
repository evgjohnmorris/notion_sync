/**
 * Generated Tool: blocksTool_0057
 * Domain: Blocks
 * ID: 0057
 */
exports.blocksTool_0057 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0057:', error);
    throw error;
  }
};
