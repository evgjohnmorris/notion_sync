/**
 * Generated Tool: blocksTool_0269
 * Domain: Blocks
 * ID: 0269
 */
exports.blocksTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0269:', error);
    throw error;
  }
};
