/**
 * Generated Tool: blocksTool_0004
 * Domain: Blocks
 * ID: 0004
 */
exports.blocksTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0004:', error);
    throw error;
  }
};
