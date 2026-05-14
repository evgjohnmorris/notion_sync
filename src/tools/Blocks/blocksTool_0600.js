/**
 * Generated Tool: blocksTool_0600
 * Domain: Blocks
 * ID: 0600
 */
exports.blocksTool_0600 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0600:', error);
    throw error;
  }
};
