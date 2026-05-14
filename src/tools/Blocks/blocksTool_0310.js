/**
 * Generated Tool: blocksTool_0310
 * Domain: Blocks
 * ID: 0310
 */
exports.blocksTool_0310 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0310:', error);
    throw error;
  }
};
