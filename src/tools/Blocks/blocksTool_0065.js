/**
 * Generated Tool: blocksTool_0065
 * Domain: Blocks
 * ID: 0065
 */
exports.blocksTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0065:', error);
    throw error;
  }
};
