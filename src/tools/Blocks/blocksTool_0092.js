/**
 * Generated Tool: blocksTool_0092
 * Domain: Blocks
 * ID: 0092
 */
exports.blocksTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0092:', error);
    throw error;
  }
};
