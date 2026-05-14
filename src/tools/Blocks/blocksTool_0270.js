/**
 * Generated Tool: blocksTool_0270
 * Domain: Blocks
 * ID: 0270
 */
exports.blocksTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0270:', error);
    throw error;
  }
};
