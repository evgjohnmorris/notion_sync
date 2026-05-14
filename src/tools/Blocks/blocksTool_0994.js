/**
 * Generated Tool: blocksTool_0994
 * Domain: Blocks
 * ID: 0994
 */
exports.blocksTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0994:', error);
    throw error;
  }
};
