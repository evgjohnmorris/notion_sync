/**
 * Generated Tool: blocksTool_0846
 * Domain: Blocks
 * ID: 0846
 */
exports.blocksTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0846:', error);
    throw error;
  }
};
