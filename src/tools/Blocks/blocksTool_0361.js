/**
 * Generated Tool: blocksTool_0361
 * Domain: Blocks
 * ID: 0361
 */
exports.blocksTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0361:', error);
    throw error;
  }
};
