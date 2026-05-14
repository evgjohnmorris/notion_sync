/**
 * Generated Tool: blocksTool_0251
 * Domain: Blocks
 * ID: 0251
 */
exports.blocksTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0251:', error);
    throw error;
  }
};
