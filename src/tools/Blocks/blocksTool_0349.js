/**
 * Generated Tool: blocksTool_0349
 * Domain: Blocks
 * ID: 0349
 */
exports.blocksTool_0349 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0349:', error);
    throw error;
  }
};
