/**
 * Generated Tool: blocksTool_0155
 * Domain: Blocks
 * ID: 0155
 */
exports.blocksTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0155:', error);
    throw error;
  }
};
