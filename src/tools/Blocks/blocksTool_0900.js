/**
 * Generated Tool: blocksTool_0900
 * Domain: Blocks
 * ID: 0900
 */
exports.blocksTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0900:', error);
    throw error;
  }
};
