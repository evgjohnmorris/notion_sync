/**
 * Generated Tool: blocksTool_0099
 * Domain: Blocks
 * ID: 0099
 */
exports.blocksTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0099:', error);
    throw error;
  }
};
