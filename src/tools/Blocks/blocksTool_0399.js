/**
 * Generated Tool: blocksTool_0399
 * Domain: Blocks
 * ID: 0399
 */
exports.blocksTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0399:', error);
    throw error;
  }
};
